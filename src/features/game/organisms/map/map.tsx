import React from 'react'
import { GameField } from '../../templates'

import Room from '../../../../assets/room.svg'
import Laptop from '../../../../assets/laptop.svg'
import Table from '../../../../assets/table.svg'
import { GameObject } from '../../molecules'

const contentProps = {
  top: 423,
  left: 17,
  height: 512,
  width: 887,
}

export const Map: React.FC = () => (
  <GameField background={<Room />} content={contentProps}>
    <GameObject>
      <Table />
    </GameObject>
    <GameObject>
      <Laptop />
    </GameObject>
  </GameField>
)
