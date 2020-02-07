import * as React from 'react'
import { Container, Sprite } from '@inlet/react-pixi'
import { Point } from 'pixi.js'

import tvSprite from '../../../../assets/tv.svg'

const obsp = new Point(1, 0.5)
const spriteScale = new Point(1, 2)

export const Map: React.SFC = () => (
  <Container scale={obsp}>
    <Sprite image={tvSprite} scale={spriteScale} />
  </Container>
)
