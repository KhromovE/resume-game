import React from 'react'
import { useStore } from 'effector-react'

import { GameField } from '../../templates'
import Room from '../../../../assets/room.svg'
import Laptop from '../../../../assets/laptop.svg'
import Table from '../../../../assets/table.svg'
import Character from '../../../../assets/character.svg'
import { GameObject } from '../../molecules'
import { $table, $laptop, $character } from './model'

const contentProps = {
  top: 393,
  left: 117,
  height: 572,
  width: 686,
}

export const Map: React.FC = () => {
  const table = useStore($table)
  const laptop = useStore($laptop)
  const character = useStore($character)

  return (
    <GameField background={<Room />} content={contentProps}>
      <GameObject x={table.x} y={table.y}>
        <Table />
      </GameObject>
      <GameObject x={laptop.x} y={laptop.y}>
        <Laptop />
      </GameObject>
      <GameObject x={character.x} y={character.y}>
        <Character />
      </GameObject>
    </GameField>
  )
}
