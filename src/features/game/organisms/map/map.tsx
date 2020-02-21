import React from 'react'
import { useStore } from 'effector-react'

import { GameField } from '../../templates'
import Room from '../../../../assets/room.svg'
import { $table, $laptop, $character } from './model'
import { Table, Laptop, Character } from '../../atoms'

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
      <Table x={table.x} y={table.y} />
      <Laptop x={laptop.x} y={laptop.y} />
      <Character x={character.x} y={character.y} />
    </GameField>
  )
}
