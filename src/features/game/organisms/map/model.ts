import { pick } from 'ramda'

import { $laptopObject, $tableObject, $characterObject } from '../../models'
import { Point } from '../../../../lib/createGameObject'

const takeOnlyCoords = pick(['x', 'y'])

export const $laptop = $laptopObject.map<Point>(takeOnlyCoords)
export const $table = $tableObject.map<Point>(takeOnlyCoords)
export const $character = $characterObject.map<Point>(takeOnlyCoords)
