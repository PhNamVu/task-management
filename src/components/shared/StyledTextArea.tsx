import React from 'react'
import { useField } from 'formik'
import { Textarea, TextareaProps } from '@chakra-ui/react'

export const StyledTextArea = ({ ...props }: TextareaProps) => {
  const [field, meta] = useField(props as any)

  return (
    <Textarea
      {...field}
      {...props}
      isInValid={meta.error && meta.touched}
      errorBorderColor="crimson"
      focusBorderColor="cyan.400"
      minHeight="10rem"
    />
  )
}
