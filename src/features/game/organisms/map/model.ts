import * as R from 'ramda'
import { $laptopObject, $tableObject, $characterObject } from '../../models'

const takeOnlyCoords = R.pick(['x', 'y'])

export const $laptop = $laptopObject.map(takeOnlyCoords)
export const $table = $tableObject.map(takeOnlyCoords)
export const $character = $characterObject.map(takeOnlyCoords)
