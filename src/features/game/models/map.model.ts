import { createStore } from 'effector'
import R from 'ramda'

import { MAP_HEIGHT, MAP_WIDTH } from '../../common/constants/map'

const createNullableArray = <T extends number>(size: T): T[] => Array(size).fill(0)
const createMatrix = <T extends number>(width: T, height: T): T[][] =>
  R.map(() => createNullableArray(height), createNullableArray(width))
const matrix: number[][] = createMatrix(MAP_HEIGHT, MAP_WIDTH)

export const $map = createStore(matrix)
