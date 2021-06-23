import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useUpdateWorkspaceStatusMutation } from '../../generated/hooks'

import { negativeToast, positiveToast } from '../../helpers/toaster'
import { AlertModal } from '../modal/alert'

interface WorkspaceSettingProps {
  status: string
  id: string
}

export const WorkspaceSetting: React.FC<WorkspaceSettingProps> = ({
  status,
  id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [updateStatus] = useUpdateWorkspaceStatusMutation()

  const handleUpdate = async (value: any) => {
    try {
      await updateStatus({
        variables: {
          id,
          status: value,
        },
      })
      positiveToast({
        title: 'Updated',
      })
    } catch (error) {
      negativeToast({
        title: 'Update fail',
      })
    }
  }
  const handleDelete = () => {
    positiveToast({
      title: 'Deleted',
    })
  }
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}>Settings</MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup
            defaultValue={status}
            type="radio"
            onChange={(e) => {
              handleUpdate(e)
            }}
          >
            <MenuItemOption value="public">Public</MenuItemOption>
            <MenuItemOption value="private">Private</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <Heading
            as="h3"
            size="xs"
            ml={5}
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            color="red.500"
            onClick={onOpen}
          >
            Delete this workspace
          </Heading>
        </MenuList>
      </Menu>
      <AlertModal
        title="Delete Workspace ?"
        isOpen={isOpen}
        onClose={onClose}
        submit={handleDelete}
        cancelRef={cancelRef}
        message="All the tasks and attachments will be removed forever"
      />
    </>
  )
}
