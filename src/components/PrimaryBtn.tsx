import React from 'react'
import { ClipLoader } from 'react-spinners'
import { Button } from '@chakra-ui/react'

export const PrimaryBtn = (props : any) => {
    return (
        <Button
            {...props}
            colorScheme='linkedin'
            spinner={<ClipLoader size={20} color="black" />}
        />
    )
}