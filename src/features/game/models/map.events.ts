import { createEvent } from 'effector'

import { Point } from '../../../lib/createGameObject'

export const changeCharacterPosition = createEvent<Point>()
