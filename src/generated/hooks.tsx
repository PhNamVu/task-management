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
    boards(where: { workspaceId: { _eq: $id } }, order_by: { createdAt: asc }) {
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
export const UpdateBoardDocument = gql`
  mutation updateBoard($id: String, $object: boards_set_input!) {
    update_boards(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateBoardMutationFn = Apollo.MutationFunction<
  Types.UpdateBoardMutation,
  Types.UpdateBoardMutationVariables
>

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateBoardMutation,
    Types.UpdateBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateBoardMutation,
    Types.UpdateBoardMutationVariables
  >(UpdateBoardDocument, options)
}
export type UpdateBoardMutationHookResult = ReturnType<
  typeof useUpdateBoardMutation
>
export type UpdateBoardMutationResult = Apollo.MutationResult<Types.UpdateBoardMutation>
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateBoardMutation,
  Types.UpdateBoardMutationVariables
>
export const CountUserBoardTaskDocument = gql`
  query countUserBoardTask($id: String, $now: timestamptz!) {
    boards(where: { id: { _eq: $id } }) {
      workspace {
        user_workspaces {
          user {
            id
            displayName
            todo: tasks_aggregate(
              where: {
                task: {
                  _and: {
                    boardId: { _eq: $id }
                    dueDate: { _gt: $now }
                    code: { _eq: 1 }
                  }
                }
              }
            ) {
              aggregate {
                count
              }
            }
            inProgress: tasks_aggregate(
              where: {
                task: {
                  _and: {
                    boardId: { _eq: $id }
                    dueDate: { _gt: $now }
                    code: { _eq: 2 }
                  }
                }
              }
            ) {
              aggregate {
                count
              }
            }
            done: tasks_aggregate(
              where: {
                task: { _and: { boardId: { _eq: $id }, code: { _eq: 3 } } }
              }
            ) {
              aggregate {
                count
              }
            }
            late: tasks_aggregate(
              where: {
                task: {
                  _and: {
                    boardId: { _eq: $id }
                    dueDate: { _lt: $now }
                    code: { _in: [1, 2] }
                  }
                }
              }
            ) {
              aggregate {
                count
              }
            }
          }
        }
      }
    }
  }
`

/**
 * __useCountUserBoardTaskQuery__
 *
 * To run a query within a React component, call `useCountUserBoardTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountUserBoardTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountUserBoardTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      now: // value for 'now'
 *   },
 * });
 */
export function useCountUserBoardTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.CountUserBoardTaskQuery,
    Types.CountUserBoardTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.CountUserBoardTaskQuery,
    Types.CountUserBoardTaskQueryVariables
  >(CountUserBoardTaskDocument, options)
}
export function useCountUserBoardTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountUserBoardTaskQuery,
    Types.CountUserBoardTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.CountUserBoardTaskQuery,
    Types.CountUserBoardTaskQueryVariables
  >(CountUserBoardTaskDocument, options)
}
export type CountUserBoardTaskQueryHookResult = ReturnType<
  typeof useCountUserBoardTaskQuery
>
export type CountUserBoardTaskLazyQueryHookResult = ReturnType<
  typeof useCountUserBoardTaskLazyQuery
>
export type CountUserBoardTaskQueryResult = Apollo.QueryResult<
  Types.CountUserBoardTaskQuery,
  Types.CountUserBoardTaskQueryVariables
>
export const DeleteBoardDocument = gql`
  mutation deleteBoard($id: String!) {
    delete_boards(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type DeleteBoardMutationFn = Apollo.MutationFunction<
  Types.DeleteBoardMutation,
  Types.DeleteBoardMutationVariables
>

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteBoardMutation,
    Types.DeleteBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteBoardMutation,
    Types.DeleteBoardMutationVariables
  >(DeleteBoardDocument, options)
}
export type DeleteBoardMutationHookResult = ReturnType<
  typeof useDeleteBoardMutation
>
export type DeleteBoardMutationResult = Apollo.MutationResult<Types.DeleteBoardMutation>
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteBoardMutation,
  Types.DeleteBoardMutationVariables
>
export const AddTaskCommentDocument = gql`
  mutation addTaskComment($object: task_comment_insert_input!) {
    insert_task_comment(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type AddTaskCommentMutationFn = Apollo.MutationFunction<
  Types.AddTaskCommentMutation,
  Types.AddTaskCommentMutationVariables
>

/**
 * __useAddTaskCommentMutation__
 *
 * To run a mutation, you first call `useAddTaskCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskCommentMutation, { data, loading, error }] = useAddTaskCommentMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddTaskCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddTaskCommentMutation,
    Types.AddTaskCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.AddTaskCommentMutation,
    Types.AddTaskCommentMutationVariables
  >(AddTaskCommentDocument, options)
}
export type AddTaskCommentMutationHookResult = ReturnType<
  typeof useAddTaskCommentMutation
>
export type AddTaskCommentMutationResult = Apollo.MutationResult<Types.AddTaskCommentMutation>
export type AddTaskCommentMutationOptions = Apollo.BaseMutationOptions<
  Types.AddTaskCommentMutation,
  Types.AddTaskCommentMutationVariables
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
      priority
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
      priority
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
      createDepend {
        status
        dependTask {
          id
          title
          code
        }
      }
      dependOn {
        status
        task {
          id
          title
          code
        }
      }
      owner {
        email
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
export const TaskCommentDocument = gql`
  query taskComment($id: String!, $limit: Int!, $offset: Int!) {
    tasks(where: { id: { _eq: $id } }) {
      createdAt
      startDate
      dueDate
      owner {
        displayName
      }
      comments(limit: $limit, order_by: { createdAt: desc }, offset: $offset) {
        id
        text
        attachments
        user {
          displayName
          photoUrl
          id
        }
        createdAt
      }
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

/**
 * __useTaskCommentQuery__
 *
 * To run a query within a React component, call `useTaskCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTaskCommentQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.TaskCommentQuery,
    Types.TaskCommentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.TaskCommentQuery,
    Types.TaskCommentQueryVariables
  >(TaskCommentDocument, options)
}
export function useTaskCommentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TaskCommentQuery,
    Types.TaskCommentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.TaskCommentQuery,
    Types.TaskCommentQueryVariables
  >(TaskCommentDocument, options)
}
export type TaskCommentQueryHookResult = ReturnType<typeof useTaskCommentQuery>
export type TaskCommentLazyQueryHookResult = ReturnType<
  typeof useTaskCommentLazyQuery
>
export type TaskCommentQueryResult = Apollo.QueryResult<
  Types.TaskCommentQuery,
  Types.TaskCommentQueryVariables
>
export const DeleteTaskDocument = gql`
  mutation deleteTask($id: String!) {
    delete_tasks(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type DeleteTaskMutationFn = Apollo.MutationFunction<
  Types.DeleteTaskMutation,
  Types.DeleteTaskMutationVariables
>

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteTaskMutation,
    Types.DeleteTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteTaskMutation,
    Types.DeleteTaskMutationVariables
  >(DeleteTaskDocument, options)
}
export type DeleteTaskMutationHookResult = ReturnType<
  typeof useDeleteTaskMutation
>
export type DeleteTaskMutationResult = Apollo.MutationResult<Types.DeleteTaskMutation>
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteTaskMutation,
  Types.DeleteTaskMutationVariables
>
export const CountTotalTaskDocument = gql`
  query countTotalTask($id: String, $now: timestamptz!) {
    todo: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          code: { _eq: 1 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    inProgress: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          code: { _eq: 2 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    done: tasks_aggregate(
      where: { _and: { boardId: { _eq: $id }, code: { _eq: 3 } } }
    ) {
      aggregate {
        count
      }
    }
    overDue: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          code: { _in: [1, 2] }
        }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useCountTotalTaskQuery__
 *
 * To run a query within a React component, call `useCountTotalTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountTotalTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountTotalTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      now: // value for 'now'
 *   },
 * });
 */
export function useCountTotalTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.CountTotalTaskQuery,
    Types.CountTotalTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.CountTotalTaskQuery,
    Types.CountTotalTaskQueryVariables
  >(CountTotalTaskDocument, options)
}
export function useCountTotalTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountTotalTaskQuery,
    Types.CountTotalTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.CountTotalTaskQuery,
    Types.CountTotalTaskQueryVariables
  >(CountTotalTaskDocument, options)
}
export type CountTotalTaskQueryHookResult = ReturnType<
  typeof useCountTotalTaskQuery
>
export type CountTotalTaskLazyQueryHookResult = ReturnType<
  typeof useCountTotalTaskLazyQuery
>
export type CountTotalTaskQueryResult = Apollo.QueryResult<
  Types.CountTotalTaskQuery,
  Types.CountTotalTaskQueryVariables
>
export const CountStackTaskDocument = gql`
  query countStackTask($id: String, $now: timestamptz!) {
    todo: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          code: { _eq: 1 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    todoLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          code: { _eq: 1 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    inProgress: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          code: { _eq: 2 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    inProgressLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          code: { _eq: 2 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    done: tasks_aggregate(
      where: { _and: { boardId: { _eq: $id }, code: { _eq: 3 } } }
    ) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useCountStackTaskQuery__
 *
 * To run a query within a React component, call `useCountStackTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountStackTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountStackTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      now: // value for 'now'
 *   },
 * });
 */
export function useCountStackTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.CountStackTaskQuery,
    Types.CountStackTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.CountStackTaskQuery,
    Types.CountStackTaskQueryVariables
  >(CountStackTaskDocument, options)
}
export function useCountStackTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountStackTaskQuery,
    Types.CountStackTaskQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.CountStackTaskQuery,
    Types.CountStackTaskQueryVariables
  >(CountStackTaskDocument, options)
}
export type CountStackTaskQueryHookResult = ReturnType<
  typeof useCountStackTaskQuery
>
export type CountStackTaskLazyQueryHookResult = ReturnType<
  typeof useCountStackTaskLazyQuery
>
export type CountStackTaskQueryResult = Apollo.QueryResult<
  Types.CountStackTaskQuery,
  Types.CountStackTaskQueryVariables
>
export const CountTaskPriorityDocument = gql`
  query countTaskPriority($id: String, $now: timestamptz!) {
    low: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          priority: { _eq: "low" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    lowLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          priority: { _eq: "low" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    lowDone: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          priority: { _eq: "low" }
          code: { _eq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    important: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          priority: { _eq: "important" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    importantLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          priority: { _eq: "important" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    importantDone: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          priority: { _eq: "important" }
          code: { _eq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    medium: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          priority: { _eq: "medium" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    mediumLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          priority: { _eq: "medium" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    mediumDone: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          priority: { _eq: "medium" }
          code: { _eq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    urgent: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _gt: $now }
          priority: { _eq: "urgent" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    urgentLate: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          dueDate: { _lt: $now }
          priority: { _eq: "urgent" }
          code: { _neq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    urgentDone: tasks_aggregate(
      where: {
        _and: {
          boardId: { _eq: $id }
          priority: { _eq: "urgent" }
          code: { _eq: 3 }
        }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useCountTaskPriorityQuery__
 *
 * To run a query within a React component, call `useCountTaskPriorityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountTaskPriorityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountTaskPriorityQuery({
 *   variables: {
 *      id: // value for 'id'
 *      now: // value for 'now'
 *   },
 * });
 */
export function useCountTaskPriorityQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.CountTaskPriorityQuery,
    Types.CountTaskPriorityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.CountTaskPriorityQuery,
    Types.CountTaskPriorityQueryVariables
  >(CountTaskPriorityDocument, options)
}
export function useCountTaskPriorityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountTaskPriorityQuery,
    Types.CountTaskPriorityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.CountTaskPriorityQuery,
    Types.CountTaskPriorityQueryVariables
  >(CountTaskPriorityDocument, options)
}
export type CountTaskPriorityQueryHookResult = ReturnType<
  typeof useCountTaskPriorityQuery
>
export type CountTaskPriorityLazyQueryHookResult = ReturnType<
  typeof useCountTaskPriorityLazyQuery
>
export type CountTaskPriorityQueryResult = Apollo.QueryResult<
  Types.CountTaskPriorityQuery,
  Types.CountTaskPriorityQueryVariables
>
export const GetTasksScheduleDocument = gql`
  query getTasksSchedule($boardId: String) {
    tasks(where: { boardId: { _eq: $boardId } }) {
      title
      end: dueDate
      start: startDate
      id
    }
  }
`

/**
 * __useGetTasksScheduleQuery__
 *
 * To run a query within a React component, call `useGetTasksScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksScheduleQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useGetTasksScheduleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetTasksScheduleQuery,
    Types.GetTasksScheduleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetTasksScheduleQuery,
    Types.GetTasksScheduleQueryVariables
  >(GetTasksScheduleDocument, options)
}
export function useGetTasksScheduleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetTasksScheduleQuery,
    Types.GetTasksScheduleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetTasksScheduleQuery,
    Types.GetTasksScheduleQueryVariables
  >(GetTasksScheduleDocument, options)
}
export type GetTasksScheduleQueryHookResult = ReturnType<
  typeof useGetTasksScheduleQuery
>
export type GetTasksScheduleLazyQueryHookResult = ReturnType<
  typeof useGetTasksScheduleLazyQuery
>
export type GetTasksScheduleQueryResult = Apollo.QueryResult<
  Types.GetTasksScheduleQuery,
  Types.GetTasksScheduleQueryVariables
>
export const GetDependenciesDocument = gql`
  query getDependencies($where: tasks_bool_exp) {
    tasks(where: $where, limit: 10) {
      id
      title
      code
      createDepend {
        taskDependId
      }
      dependOn {
        taskId
      }
      assignee {
        user {
          displayName
          photoUrl
        }
      }
    }
  }
`

/**
 * __useGetDependenciesQuery__
 *
 * To run a query within a React component, call `useGetDependenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDependenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDependenciesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetDependenciesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetDependenciesQuery,
    Types.GetDependenciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.GetDependenciesQuery,
    Types.GetDependenciesQueryVariables
  >(GetDependenciesDocument, options)
}
export function useGetDependenciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetDependenciesQuery,
    Types.GetDependenciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.GetDependenciesQuery,
    Types.GetDependenciesQueryVariables
  >(GetDependenciesDocument, options)
}
export type GetDependenciesQueryHookResult = ReturnType<
  typeof useGetDependenciesQuery
>
export type GetDependenciesLazyQueryHookResult = ReturnType<
  typeof useGetDependenciesLazyQuery
>
export type GetDependenciesQueryResult = Apollo.QueryResult<
  Types.GetDependenciesQuery,
  Types.GetDependenciesQueryVariables
>
export const PostTaskDependencyDocument = gql`
  mutation postTaskDependency($object: task_dependencies_insert_input!) {
    insert_task_dependencies(objects: [$object]) {
      affected_rows
      returning {
        status
      }
    }
  }
`
export type PostTaskDependencyMutationFn = Apollo.MutationFunction<
  Types.PostTaskDependencyMutation,
  Types.PostTaskDependencyMutationVariables
>

/**
 * __usePostTaskDependencyMutation__
 *
 * To run a mutation, you first call `usePostTaskDependencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTaskDependencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTaskDependencyMutation, { data, loading, error }] = usePostTaskDependencyMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostTaskDependencyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostTaskDependencyMutation,
    Types.PostTaskDependencyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostTaskDependencyMutation,
    Types.PostTaskDependencyMutationVariables
  >(PostTaskDependencyDocument, options)
}
export type PostTaskDependencyMutationHookResult = ReturnType<
  typeof usePostTaskDependencyMutation
>
export type PostTaskDependencyMutationResult = Apollo.MutationResult<Types.PostTaskDependencyMutation>
export type PostTaskDependencyMutationOptions = Apollo.BaseMutationOptions<
  Types.PostTaskDependencyMutation,
  Types.PostTaskDependencyMutationVariables
>
export const DeleteDependencyDocument = gql`
  mutation deleteDependency($taskId: String!, $taskDependId: String!) {
    delete_task_dependencies(
      where: {
        _and: { taskId: { _eq: $taskId }, taskDependId: { _eq: $taskDependId } }
      }
    ) {
      affected_rows
      returning {
        status
      }
    }
  }
`
export type DeleteDependencyMutationFn = Apollo.MutationFunction<
  Types.DeleteDependencyMutation,
  Types.DeleteDependencyMutationVariables
>

/**
 * __useDeleteDependencyMutation__
 *
 * To run a mutation, you first call `useDeleteDependencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDependencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDependencyMutation, { data, loading, error }] = useDeleteDependencyMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      taskDependId: // value for 'taskDependId'
 *   },
 * });
 */
export function useDeleteDependencyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteDependencyMutation,
    Types.DeleteDependencyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteDependencyMutation,
    Types.DeleteDependencyMutationVariables
  >(DeleteDependencyDocument, options)
}
export type DeleteDependencyMutationHookResult = ReturnType<
  typeof useDeleteDependencyMutation
>
export type DeleteDependencyMutationResult = Apollo.MutationResult<Types.DeleteDependencyMutation>
export type DeleteDependencyMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteDependencyMutation,
  Types.DeleteDependencyMutationVariables
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
