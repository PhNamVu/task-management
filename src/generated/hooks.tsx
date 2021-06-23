import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from './operations'
const defaultOptions = {}

export const UpdateUserAvatarDocument = gql`
  mutation updateUserAvatar($photoUrl: String) {
    update_users(where: {}, _set: { photoUrl: $photoUrl }) {
      affected_rows
    }
  }
`
export type UpdateUserAvatarMutationFn = Apollo.MutationFunction<
  Types.UpdateUserAvatarMutation,
  Types.UpdateUserAvatarMutationVariables
>

/**
 * __useUpdateUserAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAvatarMutation, { data, loading, error }] = useUpdateUserAvatarMutation({
 *   variables: {
 *      photoUrl: // value for 'photoUrl'
 *   },
 * });
 */
export function useUpdateUserAvatarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateUserAvatarMutation,
    Types.UpdateUserAvatarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateUserAvatarMutation,
    Types.UpdateUserAvatarMutationVariables
  >(UpdateUserAvatarDocument, options)
}
export type UpdateUserAvatarMutationHookResult = ReturnType<
  typeof useUpdateUserAvatarMutation
>
export type UpdateUserAvatarMutationResult = Apollo.MutationResult<Types.UpdateUserAvatarMutation>
export type UpdateUserAvatarMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateUserAvatarMutation,
  Types.UpdateUserAvatarMutationVariables
>
export const UsersDocument = gql`
  query users($id: String) {
    users(where: { id: { _eq: $id } }) {
      id
      firstName
      lastName
      photoUrl
      email
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<
  Types.UsersQuery,
  Types.UsersQueryVariables
>
export const UpdateProfileDocument = gql`
  mutation updateProfile($id: String, $object: users_set_input!) {
    update_users(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateProfileMutationFn = Apollo.MutationFunction<
  Types.UpdateProfileMutation,
  Types.UpdateProfileMutationVariables
>

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateProfileMutation,
    Types.UpdateProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateProfileMutation,
    Types.UpdateProfileMutationVariables
  >(UpdateProfileDocument, options)
}
export type UpdateProfileMutationHookResult = ReturnType<
  typeof useUpdateProfileMutation
>
export type UpdateProfileMutationResult = Apollo.MutationResult<Types.UpdateProfileMutation>
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateProfileMutation,
  Types.UpdateProfileMutationVariables
>
export const PostWorkspaceDocument = gql`
  mutation postWorkspace($object: workspaces_insert_input!) {
    insert_workspaces(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type PostWorkspaceMutationFn = Apollo.MutationFunction<
  Types.PostWorkspaceMutation,
  Types.PostWorkspaceMutationVariables
>

/**
 * __usePostWorkspaceMutation__
 *
 * To run a mutation, you first call `usePostWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postWorkspaceMutation, { data, loading, error }] = usePostWorkspaceMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostWorkspaceMutation,
    Types.PostWorkspaceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostWorkspaceMutation,
    Types.PostWorkspaceMutationVariables
  >(PostWorkspaceDocument, options)
}
export type PostWorkspaceMutationHookResult = ReturnType<
  typeof usePostWorkspaceMutation
>
export type PostWorkspaceMutationResult = Apollo.MutationResult<Types.PostWorkspaceMutation>
export type PostWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  Types.PostWorkspaceMutation,
  Types.PostWorkspaceMutationVariables
>
export const PostUserWorkspaceDocument = gql`
  mutation postUserWorkspace($object: user_workspace_insert_input!) {
    insert_user_workspace(objects: [$object]) {
      affected_rows
      returning {
        userId
        workspace {
          id
        }
      }
    }
  }
`
export type PostUserWorkspaceMutationFn = Apollo.MutationFunction<
  Types.PostUserWorkspaceMutation,
  Types.PostUserWorkspaceMutationVariables
>

/**
 * __usePostUserWorkspaceMutation__
 *
 * To run a mutation, you first call `usePostUserWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserWorkspaceMutation, { data, loading, error }] = usePostUserWorkspaceMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostUserWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostUserWorkspaceMutation,
    Types.PostUserWorkspaceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostUserWorkspaceMutation,
    Types.PostUserWorkspaceMutationVariables
  >(PostUserWorkspaceDocument, options)
}
export type PostUserWorkspaceMutationHookResult = ReturnType<
  typeof usePostUserWorkspaceMutation
>
export type PostUserWorkspaceMutationResult = Apollo.MutationResult<Types.PostUserWorkspaceMutation>
export type PostUserWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  Types.PostUserWorkspaceMutation,
  Types.PostUserWorkspaceMutationVariables
>
export const GetWorkspacesDocument = gql`
  query getWorkspaces($userId: String) {
    user_workspace(where: { userId: { _eq: $userId } }) {
      workspace {
        id
      }
    }
  }
`

/**
 * __useGetWorkspacesQuery__
 *
 * To run a query within a React component, call `useGetWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspacesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetWorkspacesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetWorkspacesQuery,
    Types.GetWorkspacesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetWorkspacesQuery,
    Types.GetWorkspacesQueryVariables
  >(GetWorkspacesDocument, options)
}
export function useGetWorkspacesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetWorkspacesQuery,
    Types.GetWorkspacesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetWorkspacesQuery,
    Types.GetWorkspacesQueryVariables
  >(GetWorkspacesDocument, options)
}
export type GetWorkspacesQueryHookResult = ReturnType<
  typeof useGetWorkspacesQuery
>
export type GetWorkspacesLazyQueryHookResult = ReturnType<
  typeof useGetWorkspacesLazyQuery
>
export type GetWorkspacesQueryResult = Apollo.QueryResult<
  Types.GetWorkspacesQuery,
  Types.GetWorkspacesQueryVariables
>
export const GetWorkspaceDetailDocument = gql`
  query getWorkspaceDetail($id: String) {
    detail: workspaces(where: { id: { _eq: $id } }) {
      title
      ownerId
      status
    }
    total: user_workspace_aggregate(where: { workspaceId: { _eq: $id } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useGetWorkspaceDetailQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkspaceDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetWorkspaceDetailQuery,
    Types.GetWorkspaceDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetWorkspaceDetailQuery,
    Types.GetWorkspaceDetailQueryVariables
  >(GetWorkspaceDetailDocument, options)
}
export function useGetWorkspaceDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetWorkspaceDetailQuery,
    Types.GetWorkspaceDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetWorkspaceDetailQuery,
    Types.GetWorkspaceDetailQueryVariables
  >(GetWorkspaceDetailDocument, options)
}
export type GetWorkspaceDetailQueryHookResult = ReturnType<
  typeof useGetWorkspaceDetailQuery
>
export type GetWorkspaceDetailLazyQueryHookResult = ReturnType<
  typeof useGetWorkspaceDetailLazyQuery
>
export type GetWorkspaceDetailQueryResult = Apollo.QueryResult<
  Types.GetWorkspaceDetailQuery,
  Types.GetWorkspaceDetailQueryVariables
>
export const UpdateWorkspaceStatusDocument = gql`
  mutation updateWorkspaceStatus($id: String, $status: String) {
    update_workspaces(where: { id: { _eq: $id } }, _set: { status: $status }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateWorkspaceStatusMutationFn = Apollo.MutationFunction<
  Types.UpdateWorkspaceStatusMutation,
  Types.UpdateWorkspaceStatusMutationVariables
>

/**
 * __useUpdateWorkspaceStatusMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceStatusMutation, { data, loading, error }] = useUpdateWorkspaceStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateWorkspaceStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateWorkspaceStatusMutation,
    Types.UpdateWorkspaceStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateWorkspaceStatusMutation,
    Types.UpdateWorkspaceStatusMutationVariables
  >(UpdateWorkspaceStatusDocument, options)
}
export type UpdateWorkspaceStatusMutationHookResult = ReturnType<
  typeof useUpdateWorkspaceStatusMutation
>
export type UpdateWorkspaceStatusMutationResult = Apollo.MutationResult<Types.UpdateWorkspaceStatusMutation>
export type UpdateWorkspaceStatusMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateWorkspaceStatusMutation,
  Types.UpdateWorkspaceStatusMutationVariables
>
