import { Collapse, Text } from '@chakra-ui/react'
import React from 'react'
import { isLongText } from '../../helpers/isLongText'

interface Props {
  text: string
  limit: number | 20
}

export const ReadMoreText: React.FC<Props> = ({ text, limit }) => {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  const isLong = isLongText(text, limit)
  return (
    <>
      <Collapse startingHeight={20} in={show} color="red">
        {text}
      </Collapse>
      {isLong && (
        <Text
          fontSize="xs"
          onClick={handleToggle}
          mt={1}
          _hover={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: 'cyan.400',
          }}
        >
          Show {show ? 'Less' : 'More'}
        </Text>
      )}
    </>
  )
}
