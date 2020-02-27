import { createStore, createEvent, guard, Store, sample } from 'effector'
import * as R from 'ramda'

type SingleDirection = 'up' | 'down' | 'left' | 'right'
type Direction = SingleDirection[]

type Result = {
  $direction: Store<Direction>
}

const UP = 87
const DOWN = 83
const LEFT = 65
const RIGHT = 68
const takeKeyCode = R.prop<'keyCode', number>('keyCode')
const compareDircetionWithPart = ([direction, part]: [
  Direction,
  SingleDirection | undefined,
]): boolean => {
  if (R.isNil(part)) return false

  return R.not(R.contains(part, direction))
}

const checkDirection = R.cond<number, SingleDirection>([
  [R.equals(UP), R.always('up')],
  [R.equals(DOWN), R.always('down')],
  [R.equals(LEFT), R.always('left')],
  [R.equals(RIGHT), R.always('right')],
])

const move = R.compose(checkDirection, takeKeyCode)
const stop = R.compose(checkDirection, takeKeyCode)

export const createDirection = (): Result => {
  const addDirection = createEvent<[Direction, SingleDirection]>()
  const removeDirection = createEvent<SingleDirection>()
  const tryDirection = createEvent<SingleDirection>()
  const buttonPressed = R.compose(tryDirection, move)
  const buttonReleased = R.compose(removeDirection, stop)

  const $direction = createStore<Direction>([])
    .on(addDirection, (state, [, part]) => R.concat(state, [part]))
    .on(removeDirection, (state, part) => R.without([part], state))

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
