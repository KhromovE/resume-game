import { sample } from 'effector'
import * as R from 'ramda'

import { createGameObject } from '../../../lib/createGameObject'
import { createDirection } from '../../../lib/createDirection'
import { createTicker } from '../../../lib/createTicker'
import { changeCharacterPosition, moveCharacter } from './map.events'

export const $tableObject = createGameObject({ x: 0, y: 0, width: 87, height: 91 })
export const $laptopObject = createGameObject({ x: 410, y: 15, width: 87, height: 91 })
export const $characterObject = createGameObject({
  x: 0,
  y: 0,
  width: 131,
  height: 76,
}).on(changeCharacterPosition, (state, payload) => R.mergeRight(state, payload))

const { $direction } = createDirection()
const ticker = createTicker(200)

ticker.add(moveCharacter)

sample({
  source: $characterObject,
  clock: $direction.updates,
  fn: store => {
    return store
  },
  target: changeCharacterPosition,
})
