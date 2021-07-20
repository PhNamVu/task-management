import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const PostBoardDocument = gql`
  mutation postBoard($object: boards_insert_input!) {
    insert_boards(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type PostBoardMutationFn = Apollo.MutationFunction<
  Types.PostBoardMutation,
  Types.PostBoardMutationVariables
>

/**
 * __usePostBoardMutation__
 *
 * To run a mutation, you first call `usePostBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postBoardMutation, { data, loading, error }] = usePostBoardMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostBoardMutation,
    Types.PostBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostBoardMutation,
    Types.PostBoardMutationVariables
  >(PostBoardDocument, options)
}
export type PostBoardMutationHookResult = ReturnType<
  typeof usePostBoardMutation
>
export type PostBoardMutationResult = Apollo.MutationResult<Types.PostBoardMutation>
export type PostBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.PostBoardMutation,
  Types.PostBoardMutationVariables
>
export const GetBoardsDocument = gql`
  query getBoards($id: String) {
    boards(where: { workspaceId: { _eq: $id } }) {
      title
      id
    }
  }
`

/**
 * __useGetBoardsQuery__
 *
 * To run a query within a React component, call `useGetBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetBoardsQuery,
    Types.GetBoardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.GetBoardsQuery, Types.GetBoardsQueryVariables>(
    GetBoardsDocument,
    options
  )
}
export function useGetBoardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetBoardsQuery,
    Types.GetBoardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetBoardsQuery,
    Types.GetBoardsQueryVariables
  >(GetBoardsDocument, options)
}
export type GetBoardsQueryHookResult = ReturnType<typeof useGetBoardsQuery>
export type GetBoardsLazyQueryHookResult = ReturnType<
  typeof useGetBoardsLazyQuery
>
export type GetBoardsQueryResult = Apollo.QueryResult<
  Types.GetBoardsQuery,
  Types.GetBoardsQueryVariables
>
export const GetBoardDetailDocument = gql`
  query getBoardDetail($id: String) {
    boards(where: { id: { _eq: $id } }) {
      title
      id
      status
    }
  }
`

/**
 * __useGetBoardDetailQuery__
 *
 * To run a query within a React component, call `useGetBoardDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetBoardDetailQuery,
    Types.GetBoardDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetBoardDetailQuery,
    Types.GetBoardDetailQueryVariables
  >(GetBoardDetailDocument, options)
}
export function useGetBoardDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetBoardDetailQuery,
    Types.GetBoardDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetBoardDetailQuery,
    Types.GetBoardDetailQueryVariables
  >(GetBoardDetailDocument, options)
}
export type GetBoardDetailQueryHookResult = ReturnType<
  typeof useGetBoardDetailQuery
>
export type GetBoardDetailLazyQueryHookResult = ReturnType<
  typeof useGetBoardDetailLazyQuery
>
export type GetBoardDetailQueryResult = Apollo.QueryResult<
  Types.GetBoardDetailQuery,
  Types.GetBoardDetailQueryVariables
>
export const PostTaskDocument = gql`
  mutation postTask($object: tasks_insert_input!) {
    insert_tasks(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type PostTaskMutationFn = Apollo.MutationFunction<
  Types.PostTaskMutation,
  Types.PostTaskMutationVariables
>

/**
 * __usePostTaskMutation__
 *
 * To run a mutation, you first call `usePostTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTaskMutation, { data, loading, error }] = usePostTaskMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostTaskMutation,
    Types.PostTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostTaskMutation,
    Types.PostTaskMutationVariables
  >(PostTaskDocument, options)
}
export type PostTaskMutationHookResult = ReturnType<typeof usePostTaskMutation>
export type PostTaskMutationResult = Apollo.MutationResult<Types.PostTaskMutation>
export type PostTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.PostTaskMutation,
  Types.PostTaskMutationVariables
>
export const GetTasksDocument = gql`
  query getTasks($boardId: String, $where: tasks_bool_exp) {
    tasks(where: $where) {
      assignee {
        user {
          displayName
          photoUrl
        }
      }
      title
      dueDate
      id
      code
    }
  }
`

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetTasksQuery,
    Types.GetTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.GetTasksQuery, Types.GetTasksQueryVariables>(
    GetTasksDocument,
    options
  )
}
export function useGetTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetTasksQuery,
    Types.GetTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.GetTasksQuery, Types.GetTasksQueryVariables>(
    GetTasksDocument,
    options
  )
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>
export type GetTasksLazyQueryHookResult = ReturnType<
  typeof useGetTasksLazyQuery
>
export type GetTasksQueryResult = Apollo.QueryResult<
  Types.GetTasksQuery,
  Types.GetTasksQueryVariables
>
export const TaskDetailDocument = gql`
  query taskDetail($id: String!) {
    tasks(where: { id: { _eq: $id } }) {
      id
      title
      description
      code
      assignee {
        user {
          id
          email
          displayName
          photoUrl
        }
      }
    }
  }
`

/**
 * __useTaskDetailQuery__
 *
 * To run a query within a React component, call `useTaskDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.TaskDetailQuery,
    Types.TaskDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.TaskDetailQuery, Types.TaskDetailQueryVariables>(
    TaskDetailDocument,
    options
  )
}
export function useTaskDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TaskDetailQuery,
    Types.TaskDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.TaskDetailQuery,
    Types.TaskDetailQueryVariables
  >(TaskDetailDocument, options)
}
export type TaskDetailQueryHookResult = ReturnType<typeof useTaskDetailQuery>
export type TaskDetailLazyQueryHookResult = ReturnType<
  typeof useTaskDetailLazyQuery
>
export type TaskDetailQueryResult = Apollo.QueryResult<
  Types.TaskDetailQuery,
  Types.TaskDetailQueryVariables
>
export const UpdateTaskDocument = gql`
  mutation updateTask($id: String, $object: tasks_set_input!) {
    update_tasks(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  Types.UpdateTaskMutation,
  Types.UpdateTaskMutationVariables
>

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTaskMutation,
    Types.UpdateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateTaskMutation,
    Types.UpdateTaskMutationVariables
  >(UpdateTaskDocument, options)
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>
export type UpdateTaskMutationResult = Apollo.MutationResult<Types.UpdateTaskMutation>
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTaskMutation,
  Types.UpdateTaskMutationVariables
>
export const AssignTaskDocument = gql`
  mutation assignTask($object: user_task_insert_input!) {
    insert_user_task(objects: [$object]) {
      affected_rows
      returning {
        user {
          id
          displayName
        }
      }
    }
  }
`
export type AssignTaskMutationFn = Apollo.MutationFunction<
  Types.AssignTaskMutation,
  Types.AssignTaskMutationVariables
>

/**
 * __useAssignTaskMutation__
 *
 * To run a mutation, you first call `useAssignTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignTaskMutation, { data, loading, error }] = useAssignTaskMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAssignTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AssignTaskMutation,
    Types.AssignTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.AssignTaskMutation,
    Types.AssignTaskMutationVariables
  >(AssignTaskDocument, options)
}
export type AssignTaskMutationHookResult = ReturnType<
  typeof useAssignTaskMutation
>
export type AssignTaskMutationResult = Apollo.MutationResult<Types.AssignTaskMutation>
export type AssignTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.AssignTaskMutation,
  Types.AssignTaskMutationVariables
>
export const RemoveAssigneeDocument = gql`
  mutation removeAssignee($userId: String!, $taskId: String!) {
    delete_user_task(
      where: { _and: { userId: { _eq: $userId }, taskId: { _eq: $taskId } } }
    ) {
      affected_rows
      returning {
        user {
          id
          displayName
        }
      }
    }
  }
`
export type RemoveAssigneeMutationFn = Apollo.MutationFunction<
  Types.RemoveAssigneeMutation,
  Types.RemoveAssigneeMutationVariables
>

/**
 * __useRemoveAssigneeMutation__
 *
 * To run a mutation, you first call `useRemoveAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAssigneeMutation, { data, loading, error }] = useRemoveAssigneeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useRemoveAssigneeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RemoveAssigneeMutation,
    Types.RemoveAssigneeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.RemoveAssigneeMutation,
    Types.RemoveAssigneeMutationVariables
  >(RemoveAssigneeDocument, options)
}
export type RemoveAssigneeMutationHookResult = ReturnType<
  typeof useRemoveAssigneeMutation
>
export type RemoveAssigneeMutationResult = Apollo.MutationResult<Types.RemoveAssigneeMutation>
export type RemoveAssigneeMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveAssigneeMutation,
  Types.RemoveAssigneeMutationVariables
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
export const DeleteMemberDocument = gql`
  mutation deleteMember($userId: String!, $workspaceId: String!) {
    delete_user_workspace(
      where: {
        _and: { userId: { _eq: $userId }, workspaceId: { _eq: $workspaceId } }
      }
    ) {
      affected_rows
      returning {
        userId
      }
    }
  }
`
export type DeleteMemberMutationFn = Apollo.MutationFunction<
  Types.DeleteMemberMutation,
  Types.DeleteMemberMutationVariables
>

/**
 * __useDeleteMemberMutation__
 *
 * To run a mutation, you first call `useDeleteMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberMutation, { data, loading, error }] = useDeleteMemberMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useDeleteMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteMemberMutation,
    Types.DeleteMemberMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteMemberMutation,
    Types.DeleteMemberMutationVariables
  >(DeleteMemberDocument, options)
}
export type DeleteMemberMutationHookResult = ReturnType<
  typeof useDeleteMemberMutation
>
export type DeleteMemberMutationResult = Apollo.MutationResult<Types.DeleteMemberMutation>
export type DeleteMemberMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteMemberMutation,
  Types.DeleteMemberMutationVariables
>
export const MembersDocument = gql`
  query members($where: user_workspace_bool_exp) {
    user_workspace(where: $where) {
      user {
        id
        displayName
        photoUrl
      }
    }
  }
`

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMembersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.MembersQuery,
    Types.MembersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.MembersQuery, Types.MembersQueryVariables>(
    MembersDocument,
    options
  )
}
export function useMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.MembersQuery,
    Types.MembersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.MembersQuery, Types.MembersQueryVariables>(
    MembersDocument,
    options
  )
}
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>
export type MembersQueryResult = Apollo.QueryResult<
  Types.MembersQuery,
  Types.MembersQueryVariables
>
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
export const GetWorkspaceDetailDocument = gql`
  query getWorkspaceDetail($id: String) {
    detail: workspaces(where: { id: { _eq: $id } }) {
      title
      ownerId
      description
    }
    members: user_workspace(where: { workspaceId: { _eq: $id } }) {
      user {
        id
        displayName
        photoUrl
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
export const UpdateWorkspaceDocument = gql`
  mutation updateWorkspace($id: String, $object: workspaces_set_input!) {
    update_workspaces(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<
  Types.UpdateWorkspaceMutation,
  Types.UpdateWorkspaceMutationVariables
>

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateWorkspaceMutation,
    Types.UpdateWorkspaceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateWorkspaceMutation,
    Types.UpdateWorkspaceMutationVariables
  >(UpdateWorkspaceDocument, options)
}
export type UpdateWorkspaceMutationHookResult = ReturnType<
  typeof useUpdateWorkspaceMutation
>
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<Types.UpdateWorkspaceMutation>
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateWorkspaceMutation,
  Types.UpdateWorkspaceMutationVariables
>
export const DeleteWorkspaceDocument = gql`
  mutation deleteWorkspace($id: String) {
    delete_workspaces(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        title
      }
    }
  }
`
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<
  Types.DeleteWorkspaceMutation,
  Types.DeleteWorkspaceMutationVariables
>

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteWorkspaceMutation,
    Types.DeleteWorkspaceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteWorkspaceMutation,
    Types.DeleteWorkspaceMutationVariables
  >(DeleteWorkspaceDocument, options)
}
export type DeleteWorkspaceMutationHookResult = ReturnType<
  typeof useDeleteWorkspaceMutation
>
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<Types.DeleteWorkspaceMutation>
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteWorkspaceMutation,
  Types.DeleteWorkspaceMutationVariables
>
