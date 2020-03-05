import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { GameObject } from '../../../../lib/createGameObject'

type GameFieldProps = {
  background: React.ReactNode
  content: GameObject
}

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div<GameObject>`
  position: absolute;
  transform: rotateX(54.7deg) rotateZ(45deg);

  ${({ x, y, height, width }): FlattenSimpleInterpolation => css`
    left: ${x}px;
    top: ${y}px;
    height: ${height}px;
    width: ${width}px;
  `}
`

export const GameField: React.FC<GameFieldProps> = ({
  children,
  background,
  content: { x, y, height, width },
}) => (
  <Wrapper>
    {background}
    <Content x={x} y={y} height={height} width={width}>
      {children}
    </Content>
  </Wrapper>
)
