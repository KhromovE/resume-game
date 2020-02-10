import React from 'react'
import { Container, Sprite } from '@inlet/react-pixi'

import roomSprite from '../../../../assets/room.svg'
import laptopSprite from '../../../../assets/laptop.svg'
import tableSprite from '../../../../assets/table.svg'

export const Map: React.SFC = () => (
  <Container>
    <Sprite image={roomSprite} />
    <Container position={[16, 425]}>
      <Sprite image={laptopSprite} position={[431, 418]} />
      <Sprite image={tableSprite} />
    </Container>
  </Container>
)
