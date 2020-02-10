import { createStore } from 'effector'
import R from 'ramda'

import { MAP_HEIGHT, MAP_WIDTH } from '../constants/map'

const createColumn = <T extends number>(size: T): T[] => Array(size).fill(0)
const createMatrix = <T extends number>(width: T, height: T): T[][] =>
  R.map(() => createColumn(height), Array(width).fill(0))
const matrix: number[][] = createMatrix(MAP_HEIGHT, MAP_WIDTH)

export const $map = createStore(matrix)
