import { createStore, createEvent, guard, Store, sample } from 'effector'
import { isNil, not, contains, prop, cond, always, equals, concat, compose, without } from 'ramda'

type SingleDirection = 'up' | 'down' | 'left' | 'right'
type Direction = SingleDirection[]

type Result = {
  $direction: Store<Direction>
}

const UP = 87
const DOWN = 83
const LEFT = 65
const RIGHT = 68
const takeKeyCode = prop<'keyCode', number>('keyCode')
const compareDircetionWithPart = ([direction, part]: [
  Direction,
  SingleDirection | undefined,
]): boolean => {
  if (isNil(part)) return false

  return not(contains(part, direction))
}

const checkDirection = cond<number, SingleDirection>([
  [equals(UP), always('up')],
  [equals(DOWN), always('down')],
  [equals(LEFT), always('left')],
  [equals(RIGHT), always('right')],
])

const move = compose(checkDirection, takeKeyCode)
const stop = compose(checkDirection, takeKeyCode)

export const createDirection = (): Result => {
  const addDirection = createEvent<[Direction, SingleDirection]>()
  const removeDirection = createEvent<SingleDirection>()
  const tryDirection = createEvent<SingleDirection>()
  const buttonPressed = compose(tryDirection, move)
  const buttonReleased = compose(removeDirection, stop)

  const $direction = createStore<Direction>([])
    .on(addDirection, (state, [, part]) => concat(state, [part]))
    .on(removeDirection, (state, part) => without([part], state))

  guard<[Direction, SingleDirection]>({
    source: sample($direction, tryDirection, (dir, part) => [dir, part]),
    filter: compareDircetionWithPart,
    target: addDirection,
  })

  document.addEventListener('keydown', buttonPressed)
  document.addEventListener('keyup', buttonReleased)

  return {
    $direction,
  }
}
