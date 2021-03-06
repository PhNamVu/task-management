import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import {
  GetWorkspacesDocument,
  useDeleteWorkspaceMutation,
} from '../../generated/hooks'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { useAuth } from '../../hooks/use-auth'
import { AlertModal } from '../modal/alert'

interface WorkspaceSettingProps {
  id: string
  ownerId: string
}

export const WorkspaceSetting: React.FC<WorkspaceSettingProps> = ({
  id,
  ownerId,
}) => {
  const { state }: any = useAuth()
  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [deleteWorkspace] = useDeleteWorkspaceMutation()

  const handleDelete = async () => {
    try {
      const res = await deleteWorkspace({
        variables: {
          id,
        },
        refetchQueries: [
          {
            query: GetWorkspacesDocument,
            variables: {
              userId,
            },
          },
        ],
      })
      positiveToast({
        title: `Remove '${res.data?.delete_workspaces?.returning[0].title}' successfully `,
      })
    } catch (error) {
      negativeToast({
        title: 'Remove fail',
      })
    }
  }
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} isDisabled={ownerId !== userId}>
          Settings
        </MenuButton>
        <MenuList minWidth="240px">
          {/* <MenuDivider /> */}
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
