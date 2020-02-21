import React from 'react'
import styled, { css, FlattenSimpleInterpolation, AnyStyledComponent } from 'styled-components'

import { Point } from '../../../lib/createGameObject'

const changePosition = ({ x, y }: Point): FlattenSimpleInterpolation => css`
  left: ${x}px;
  top: ${y}px;
`

export const styledSprite = (sprite: React.FC): AnyStyledComponent => styled(sprite)<Point>`
  position: absolute;

  ${changePosition}
`
