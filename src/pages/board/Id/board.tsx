import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { CardBoard } from '../../../components/board/CardBoard'

export const BoardViewPage = () => {
  return (
    <SimpleGrid columns={[1, 1, 3]} spacingX="4rem" spacingY="2rem" mt={8}>
      <CardBoard code={1} title="To Do" />
      <CardBoard code={2} title="In progress" />
      <CardBoard code={3} title="Done" />
    </SimpleGrid>
  )
}
