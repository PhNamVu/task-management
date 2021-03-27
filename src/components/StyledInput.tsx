import React from 'react'
import { useField } from 'formik'
import { Input } from "@chakra-ui/react"

export const StyledInput = ({...props}) => {
    const [field, meta] = useField(props as any)

    return (
        <Input
            {...field}
            {...props}
            isInValid={meta.error && meta.touched ? true : false}
            errorBorderColor="crimson"
        />
    )
}
