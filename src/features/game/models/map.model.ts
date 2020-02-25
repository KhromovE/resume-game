import { sampe } from 'effector'
import * as R from 'ramda'

import { createGameObject } from '../../../lib/createGameObject'
import { createDirection } from '../../../lib/createDirection'
import { changeCharacterPosition } from './map.events'

export const $tableObject = createGameObject({ x: 0, y: 0, width: 87, height: 91 })
export const $laptopObject = createGameObject({ x: 410, y: 15, width: 87, height: 91 })
export const $characterObject = createGameObject({
  x: 0,
  y: 0,
  width: 131,
  height: 76,
}).on(changeCharacterPosition, (state, payload) => R.mergeRight(state, payload))

export const { $direction } = createDirection()
