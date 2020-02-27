import { createStore, createEvent, guard, Store, sample } from 'effector'
import * as R from 'ramda'

type Direction = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}

type SingleDirection = [keyof Direction, boolean]

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
  if (part === undefined) return false

  const [partKey, partValue] = part
  const dirValue = R.prop(partKey, direction)

  return R.not(R.equals(dirValue, partValue))
}

const prepareDirection = (status: boolean): ((n: number) => SingleDirection) =>
  R.cond<number, SingleDirection>([
    [R.equals(UP), R.always(['up', status])],
    [R.equals(DOWN), R.always(['down', status])],
    [R.equals(LEFT), R.always(['left', status])],
    [R.equals(RIGHT), R.always(['right', status])],
  ])

const move = R.compose(prepareDirection(true), takeKeyCode)
const stop = R.compose(prepareDirection(false), takeKeyCode)

export const createDirection = (): Result => {
  const updateDirection = createEvent<[Direction, SingleDirection]>()
  const buttonEvent = createEvent<SingleDirection>()
  const buttonPressed = R.compose(buttonEvent, move)
  const buttonReleased = R.compose(buttonEvent, stop)

  const $direction = createStore<Direction>({
    up: false,
    down: false,
    left: false,
    right: false,
  }).on(updateDirection, (_, [state, [key, value]]) => R.mergeRight(state, { [key]: value }))

  guard<[Direction, SingleDirection]>({
    source: sample($direction, buttonEvent, (dir, part) => [dir, part]),
    filter: compareDircetionWithPart,
    target: updateDirection,
  })

  document.addEventListener('keydown', buttonPressed)
  document.addEventListener('keyup', buttonReleased)

  return {
    $direction,
  }
}
