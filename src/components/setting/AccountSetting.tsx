import React from 'react'

import { useUsersQuery } from '../../generated/graphql'
import { useAuth } from '../../hooks/use-auth'
import { AccountSettingForm } from '../forms/AccountSettingForm'
import { StyledAlert } from '../shared/StyledAlert'
import { StyledSkeleton } from '../shared/StyledSkeleton'


export const AccountSetting = () => {
    const {
        state: { user },
    }: any = useAuth()

    const {data, loading, error} = useUsersQuery({
        variables: {
            id: user.uid,
        }
    })

    if (loading) return  <StyledSkeleton/>

    if (error) return <StyledAlert message={`${error}`} status="error" />

    const userDetails = data && data?.users[0]

    return (
        <>
            <AccountSettingForm user={userDetails}/>
        </>
    )
}