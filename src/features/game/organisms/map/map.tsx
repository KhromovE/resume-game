import React from 'react'
// import { Container, Sprite } from '@inlet/react-pixi'
import { GameField } from '../../templates'

import Room from '../../../../assets/room.svg'
import Laptop from '../../../../assets/laptop.svg'
import Tablet from '../../../../assets/table.svg'

export const Map: React.SFC = () => (
  <GameField background={<Room />}>
    <Laptop />
    <Tablet />
  </GameField>
)
