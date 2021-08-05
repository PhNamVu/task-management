import React from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { BiTrashAlt } from 'react-icons/bi'

import { ToolTipIconButton } from '../shared/ToolTipIconButton'
import { useDeleteBoardMutation } from '../../generated/hooks'
import useDebounce from '../../hooks/use-debounce'
import { negativeToast } from '../../helpers/toaster'

interface BoardDetail {
  id: string
  title: string
}
interface BoardItemProps {
  item: BoardDetail
  refetch: () => void
}

export const BoardItem: React.FC<BoardItemProps> = ({ item, refetch }) => {
  const navigate = useNavigate()

  const color = useColorModeValue('rgba(27, 31, 35, 0.15)', '#FFFFFF')
  const [display, setDisplay] = React.useState(false)
  const [deleteBoard] = useDeleteBoardMutation()
  const displayWait = useDebounce(display, 1000)

  return (
    <Flex
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      flexDirection="column"
      height="80px"
      borderRadius="4px"
      justifyContent="center"
      alignItems="center"
      _hover={{
        border: '1px solid #0BC5EA',
        cursor: 'pointer',
        color: '#0BC5EA',
      }}
      // border={`1px solid ${color}`}
      boxShadow={`${color} 0px 1px 3px 0px, ${color} 0px 0px 0px 1px;`}
    >
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Box onClick={() => navigate(`/b/${item.id}`)}>{item.title}</Box>
        {displayWait && (
          <ToolTipIconButton
            onClick={async () => {
              try {
                await deleteBoard({
                  variables: {
                    id: item.id,
                  },
                })
                refetch()
              } catch (err) {
                negativeToast({
                  title: 'Delete error',
                  description: err,
                })
              }
            }}
            aria-label="Delete"
            label="Delete"
            variant="ghost"
            size="sm"
            isRound
            icon={<BiTrashAlt />}
          />
        )}
      </Flex>
    </Flex>
  )
}
