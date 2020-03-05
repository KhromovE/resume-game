import React from 'react'
import { useStore } from 'effector-react'

import { GameField } from '../../templates'
import Room from '../../../../assets/room.svg'
import { $table, $laptop, $character, $content } from './model'
import { Table, Laptop, Character } from '../../atoms'

export const Map: React.FC = () => {
  const table = useStore($table)
  const laptop = useStore($laptop)
  const character = useStore($character)
  const content = useStore($content)

  return (
    <GameField background={<Room />} content={content}>
      <Table object={table} />
      <Laptop object={laptop} />
      <Character object={character} />
    </GameField>
  )
}
