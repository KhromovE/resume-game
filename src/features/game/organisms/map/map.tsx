import * as React from 'react'
import { Container, useApp, Sprite } from '@inlet/react-pixi'
import { Point } from 'pixi.js'

const obsp = new Point(1, 0.5)
const spriteScale = new Point(1, 2)

export const Map: React.SFC = () => {
  const {
    screen: { width, height },
  } = useApp()

  return (
    <Container scale={obsp} position={[width / 2, height / 2]}>
      <Sprite image="https://pixijs.io/examples/examples/assets/eggHead.png" scale={spriteScale} />
    </Container>
  )
}
