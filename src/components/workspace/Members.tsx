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
import { positiveToast } from '../../helpers/toaster'
import { AlertModal } from '../modal/alert'

interface WorkspaceMemberProps {
  id?: string
  total: number
}

interface Member {
  name: string
  photoUrl: string
  id: string
}

interface MemberItemProps {
  member: Member
}

const members = [
  { id: '1', photoUrl: 'https://placekitten.com/100/100', name: 'Phuong Nam' },
  { id: '2', photoUrl: 'https://placekitten.com/100/100', name: 'Vi Minh' },
]

const MemberItem: React.FC<MemberItemProps> = ({ member }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const handleDelete = (name: string) => {
    positiveToast({
      title: `Remove ${name}`,
    })
  }
  return (
    <>
      <MenuItem minH="48px">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Avatar
              name={member.name}
              src={member.photoUrl}
              size="sm"
              alt="avt"
            />
            <Text fontSize="lg" ml={2}>
              {member.name}
            </Text>
          </Flex>
          <CloseButton size="md" color="red.500" onClick={onOpen} />
        </Flex>
      </MenuItem>
      <AlertModal
        title="Are you sure want to remove this member"
        isOpen={isOpen}
        onClose={onClose}
        submit={() => handleDelete(member.name)}
        cancelRef={cancelRef}
        message="This user will not join the workspace in the future"
      />
    </>
  )
}

export const WorkspaceMember: React.FC<WorkspaceMemberProps> = ({
  id,
  total,
}) => {
  return (
    <Box px={5}>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}>
          <Flex>
            <HiOutlineUsers />
            <Box ml={2}>Member ({total})</Box>
          </Flex>
        </MenuButton>
        <MenuList minWidth="240px">
          {members.map((item) => {
            return <MemberItem member={item} />
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}
