import { createStore, Store } from 'effector'

export type Point = {
  x: number
  y: number
}

export type Measurements = {
  width: number
  height: number
}

export type GameObject = Point & Measurements

export const createGameObject = ({ x, y, width, height }: GameObject): Store<GameObject> =>
  createStore({ x, y, width, height })
