import React from 'react'
import { GameField } from '../../templates'

import Room from '../../../../assets/room.svg'
import Laptop from '../../../../assets/laptop.svg'
import Tablet from '../../../../assets/table.svg'

const contentProps = {
  top: 423,
  left: 17,
  height: 512,
  width: 887,
}

export const Map: React.SFC = () => (
  <GameField background={<Room />} content={contentProps}>
    <Laptop />
    <Tablet />
  </GameField>
)
