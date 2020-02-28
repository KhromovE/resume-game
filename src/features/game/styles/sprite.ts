import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import { Point } from '../../../lib/createGameObject'

export const styledSprite = (sprite: React.FC): AnyStyledComponent => styled(sprite).attrs(
  ({ x, y }: Point) => ({
    style: {
      left: `${x}px`,
      top: `${y}px`,
    },
  }),
)<Point>`
  position: absolute;
`
