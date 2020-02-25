import { createStore, createEvent, Store } from 'effector'
import * as R from 'ramda'

type Left = {
  left: boolean
}

type Right = {
  right: boolean
}

type Down = {
  down: boolean
}

type Up = {
  up: boolean
}

type Direction = Left & Right & Down & Up

type SingleDirection = Left | Right | Down | Up

type Returned = {
  $direction: Store<Direction>
}

export const createDirection = (): Returned => {
  const updateDirection = createEvent<SingleDirection>()
  const buttonPressed = R.compose(
    updateDirection,
    R.cond<number, SingleDirection>([
      [R.equals(37), R.always({ left: true })],
      [R.equals(39), R.always({ right: true })],
      [R.equals(40), R.always({ down: true })],
      [R.equals(38), R.always({ up: true })],
    ]),
    R.prop<'keyCode', number>('keyCode'),
  )

  const buttonReleased = R.compose(
    updateDirection,
    R.cond<number, SingleDirection>([
      [R.equals(37), R.always({ left: false })],
      [R.equals(39), R.always({ right: false })],
      [R.equals(40), R.always({ down: false })],
      [R.equals(38), R.always({ up: false })],
    ]),
    R.prop<'keyCode', number>('keyCode'),
  )
  const $direction = createStore<Direction>({
    up: false,
    right: false,
    down: false,
    left: false,
  }).on<SingleDirection>(updateDirection, (state, payload) => R.mergeRight(state, payload))

  document.addEventListener('keydown', buttonPressed)
  document.addEventListener('keyup', buttonReleased)

  return {
    $direction,
  }
}
