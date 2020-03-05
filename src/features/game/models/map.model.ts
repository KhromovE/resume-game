import { sample, combine } from 'effector'
import { mergeRight, reduce } from 'ramda'

import { createGameObject } from '../../../lib/createGameObject'
import { createDirection } from '../../../lib/createDirection'
import { createTicker } from '../../../lib/createTicker'
import { changeCharacterPosition, moveCharacter } from './map.events'

export const $tableObject = createGameObject({ x: 0, y: 0, width: 231, height: 101 })
export const $laptopObject = createGameObject({ x: -70, y: -70, width: 78, height: 48 })
export const $characterObject = createGameObject({
  x: 90,
  y: 120,
  width: 92,
  height: 92,
}).on(changeCharacterPosition, (state, payload) => mergeRight(state, payload))
export const $contentObject = createGameObject({
  x: 117,
  y: 393,
  width: 686,
  height: 572,
})

const { $direction } = createDirection()
const ticker = createTicker()

ticker.add(moveCharacter)

sample({
  source: combine({
    character: $characterObject,
    // direction: $direction,
    content: $contentObject,
  }),
  clock: moveCharacter,
  fn: ({ character, direction, content }) => {
    console.log(direction)

    return reduce(
      (acc, item) => {
        let newCharacter = acc || character

        if (item === 'right') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x + 1,
            y: newCharacter.y - 1,
          }
        }

        if (item === 'up') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x - 1,
            y: newCharacter.y - 1,
          }
        }

        if (item === 'down') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x + 1,
            y: newCharacter.y + 1,
          }
        }

        if (item === 'left') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x - 1,
            y: newCharacter.y + 1,
          }
        }

        return newCharacter
      },
      character,
      direction,
    )
  },
  target: $characterObject,
})

sample({
  source: $characterObject,
  clock: $direction.updates,
  fn: store => {
    return store
  },
  target: changeCharacterPosition,
})
