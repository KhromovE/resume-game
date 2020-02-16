import { createStore, Store } from 'effector'

export type GameObject = {
  x: number
  y: number
  width: number
  height: number
}

export const createGameObject = ({ x, y, width, height }: GameObject): Store<GameObject> =>
  createStore({ x, y, width, height })
