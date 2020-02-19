import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Measurements } from '../../../../lib/createGameObject'

type GameFieldProps = {
  background: React.ReactNode
  content: {
    left: number
    top: number
    height: number
    width: number
  }
}

type ContentProps = {
  top: number
  left: number
} & Measurements

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div<ContentProps>`
  position: absolute;
  transform: rotateX(54.7deg) rotateZ(45deg);

  ${({ left, top, height, width }): FlattenSimpleInterpolation => css`
    left: ${left}px;
    top: ${top}px;
    height: ${height}px;
    width: ${width}px;
  `}
`

export const GameField: React.FC<GameFieldProps> = ({
  children,
  background,
  content: { top, left, height, width },
}) => (
  <Wrapper>
    {background}
    <Content top={top} left={left} height={height} width={width}>
      {children}
    </Content>
  </Wrapper>
)
