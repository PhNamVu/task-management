import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Box,
  useDisclosure,
  MenuItem,
  Text,
  Avatar,
  CloseButton,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import {
  GetWorkspacesDocument,
  useDeleteMemberMutation,
} from '../../generated/hooks'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { useAuth } from '../../hooks/use-auth'
import { AlertModal } from '../modal/alert'
interface User {
  displayName: string
  photoUrl: string
  id: string
}

interface Member {
  user: User
}

interface WorkspaceMemberProps {
  id: string
  members: any
}
interface MemberItemProps {
  member: Member
  id: string // workspace id
}

const MemberItem: React.FC<MemberItemProps> = ({ member, id }) => {
  const { state }: any = useAuth()
  const myId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const [deleteMember] = useDeleteMemberMutation()
  const handleDelete = async (userId: string, workspaceId: string) => {
    try {
      const res = await deleteMember({
        variables: {
          userId,
          workspaceId,
        },
        refetchQueries: [
          {
            query: GetWorkspacesDocument,
            variables: {
              userId: myId,
            },
          },
        ],
      })
      if (res.data?.delete_user_workspace?.affected_rows === 1) {
        positiveToast({
          title: 'Removed',
        })
      } else {
        negativeToast({
          title: 'Remove fail',
          description: 'Only the owner can remove members',
        })
      }
    } catch (error) {
      negativeToast({
        title: 'Remove fail',
      })
    }
  }

  return (
    <>
      <MenuItem minH="48px">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Avatar
              name={member.user.displayName}
              src={member.user.photoUrl}
              size="sm"
              alt="avt"
            />
            <Text fontSize="lg" ml={2}>
              {member.user.displayName}
            </Text>
          </Flex>
          {member.user.id !== myId && (
            <CloseButton size="md" color="red.500" onClick={onOpen} />
          )}
        </Flex>
      </MenuItem>
      <AlertModal
        title="Are you sure want to remove this member"
        isOpen={isOpen}
        onClose={onClose}
        submit={() => handleDelete(member.user.id, id)}
        cancelRef={cancelRef}
        message="This user will not able to access the workspace in the future"
      />
    </>
  )
}

export const WorkspaceMember: React.FC<WorkspaceMemberProps> = ({
  id,
  members,
}) => {
  return (
    <Box px={5}>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}>
          <Flex>
            <HiOutlineUsers />
            <Box ml={2}>Member ({members.length})</Box>
          </Flex>
        </MenuButton>
        <MenuList minWidth="240px">
          {members?.map((item: Member) => {
            return <MemberItem member={item} id={id} key={item.user.id} />
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}
