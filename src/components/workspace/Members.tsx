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
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import { IoExitOutline } from 'react-icons/io5'
import {
  GetWorkspaceDetailDocument,
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
  ownerId: string
}
interface MemberItemProps {
  member: Member
  id: string // workspace id3
  ownerId: string
}

const MemberItem: React.FC<MemberItemProps> = ({ member, id, ownerId }) => {
  const { state }: any = useAuth()
  const myId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const isOwner = myId === ownerId
  const isMember = member.user.id === myId
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
            query: GetWorkspaceDetailDocument,
            variables: {
              id: workspaceId,
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
        <Flex w="100%" justifyContent="space-between" alignItems="center">
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
          {isOwner && !isMember && (
            <CloseButton size="md" color="red.500" onClick={onOpen} />
          )}
          {!isOwner && isMember && (
            <IconButton
              icon={<IoExitOutline />}
              color="red.500"
              aria-label="Exit"
              variant="ghost"
              onClick={onOpen}
            />
          )}
        </Flex>
      </MenuItem>
      <AlertModal
        title={
          isOwner && !isMember
            ? 'Are you sure want to remove this member'
            : 'Are you sure want to leave this workspace'
        }
        isOpen={isOpen}
        onClose={onClose}
        submit={() => handleDelete(member.user.id, id)}
        cancelRef={cancelRef}
        message={
          isOwner && !isMember
            ? 'This user will not able to access the workspace in the future'
            : 'You will not be able to access the workspace in the future'
        }
      />
    </>
  )
}

export const WorkspaceMember: React.FC<WorkspaceMemberProps> = ({
  id,
  members,
  ownerId,
}) => (
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
          return (
            <MemberItem
              member={item}
              id={id}
              key={item.user.id}
              ownerId={ownerId}
            />
          )
        })}
      </MenuList>
    </Menu>
  </Box>
)
