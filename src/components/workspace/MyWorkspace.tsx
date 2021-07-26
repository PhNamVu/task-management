import React from 'react'

import { useAuth } from '../../hooks/use-auth'
import { ProgressLoading } from '../shared/Loading'
import { Error } from '../shared/Error'
import { WorkspaceItem } from './WorkspaceItem'
import { useGetWorkspacesQuery } from '../../generated/hooks'

export const MyWorkspace = () => {
  const { state }: any = useAuth()
  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]
  const { data, loading, error } = useGetWorkspacesQuery({
    variables: {
      userId,
    },
    fetchPolicy: 'network-only',
  })
  if (loading) return <ProgressLoading />
  if (error) return <Error />

  const user = data && data?.user_workspace
  return (
    <>
      {user?.map((item) => {
        return <WorkspaceItem key={item.workspace.id} id={item.workspace.id} />
      })}
    </>
  )
}
