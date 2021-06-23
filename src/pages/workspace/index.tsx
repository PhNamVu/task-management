import { Box, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { AddWorkspaceForm } from '../../components/forms/AddWorkspaceForm'
import { AddButton } from '../../components/shared/AddButton'
import { Modaler } from '../../components/shared/Modaler'
import { MyWorkspace } from '../../components/workspace/MyWorkspace'

const WorkspacePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box mx="10rem" mt="4rem">
      <Helmet>
        <title>Workspace | Birdy</title>
      </Helmet>
      <Heading as="h3" size="lg" mb={5}>
        Your workspace
        <AddButton onClick={onOpen} />
      </Heading>
      <Modaler isOpen={isOpen} onClose={onClose} header="Create workspace">
        <AddWorkspaceForm onClose={onClose} />
      </Modaler>
      <MyWorkspace />
    </Box>
  )
}

export default WorkspacePage
