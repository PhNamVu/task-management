import { Flex, Heading, IconButton, useClipboard } from '@chakra-ui/react'
import React from 'react'
import { getInitials } from '../../helpers/getInitial'
import { IoCopyOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

interface WorkspaceTitleProps {
  title: string
  id: string
}

export const WorkspaceTitle: React.FC<WorkspaceTitleProps> = ({
  title,
  id,
}) => {
  const navigate = useNavigate()
  const { onCopy } = useClipboard(
    `${window.location.protocol}//${window.location.host}/w/${id}`
  )
  return (
    <Flex alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="green.400"
        border="InfoText"
        borderRadius={4}
        mr={3}
        color="white"
        width={12}
      >
        <Heading as="h2" size="xl">
          {getInitials(title)}
        </Heading>
      </Flex>
      <Heading
        onClick={() => navigate(`/w/${id}`)}
        as="h3"
        size="md"
        _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        {title}
      </Heading>
      <IconButton
        isRound
        size="md"
        fontSize="lg"
        color="current"
        marginLeft="2"
        onClick={onCopy}
        icon={<IoCopyOutline />}
        aria-label="copy"
      />
    </Flex>
  )
}
