import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const BoardDetailPage = () => {
  const { id } = useParams()

  return (
    <Box mx="10rem" mt="4rem">
      {id}
      {/* <Helmet>
        <title>Workspace | Birdy</title>
      </Helmet>
      <Heading as="h3" size="lg" mb={5}>
        Your workspace
        <AddButton onClick={onOpen} />
      </Heading>
      <Modaler isOpen={isOpen} onClose={onClose} header="Create workspace">
        <AddWorkspaceForm onClose={onClose} />
      </Modaler>
      <MyWorkspace /> */}
    </Box>
  )
}

export default BoardDetailPage
