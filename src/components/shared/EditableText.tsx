import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableProps,
} from '@chakra-ui/react'
import React from 'react'

export const EditableText: React.FC<EditableProps> = ({ ...props }) => {
  return (
    <Editable {...props}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}
