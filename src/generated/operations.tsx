import * as Types from './schemas'

export type PostBoardMutationVariables = Types.Exact<{
  object: Types.Boards_Insert_Input
}>

export type PostBoardMutation = { __typename?: 'mutation_root' } & {
  insert_boards?: Types.Maybe<
    { __typename?: 'boards_mutation_response' } & Pick<
      Types.Boards_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<{ __typename?: 'boards' } & Pick<Types.Boards, 'id'>>
      }
  >
}

export type GetBoardsQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type GetBoardsQuery = { __typename?: 'query_root' } & {
  boards: Array<{ __typename?: 'boards' } & Pick<Types.Boards, 'title' | 'id'>>
}

export type GetBoardDetailQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type GetBoardDetailQuery = { __typename?: 'query_root' } & {
  boards: Array<
    { __typename?: 'boards' } & Pick<Types.Boards, 'title' | 'id' | 'status'>
  >
}

export type UpdateBoardMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  object: Types.Boards_Set_Input
}>

export type UpdateBoardMutation = { __typename?: 'mutation_root' } & {
  update_boards?: Types.Maybe<
    { __typename?: 'boards_mutation_response' } & Pick<
      Types.Boards_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<{ __typename?: 'boards' } & Pick<Types.Boards, 'id'>>
      }
  >
}

export type AddTaskCommentMutationVariables = Types.Exact<{
  object: Types.Task_Comment_Insert_Input
}>

export type AddTaskCommentMutation = { __typename?: 'mutation_root' } & {
  insert_task_comment?: Types.Maybe<
    { __typename?: 'task_comment_mutation_response' } & Pick<
      Types.Task_Comment_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'task_comment' } & Pick<Types.Task_Comment, 'id'>
        >
      }
  >
}

export type PostTaskMutationVariables = Types.Exact<{
  object: Types.Tasks_Insert_Input
}>

export type PostTaskMutation = { __typename?: 'mutation_root' } & {
  insert_tasks?: Types.Maybe<
    { __typename?: 'tasks_mutation_response' } & Pick<
      Types.Tasks_Mutation_Response,
      'affected_rows'
    > & { returning: Array<{ __typename?: 'tasks' } & Pick<Types.Tasks, 'id'>> }
  >
}

export type GetTasksQueryVariables = Types.Exact<{
  boardId?: Types.Maybe<Types.Scalars['String']>
  where?: Types.Maybe<Types.Tasks_Bool_Exp>
}>

export type GetTasksQuery = { __typename?: 'query_root' } & {
  tasks: Array<
    { __typename?: 'tasks' } & Pick<
      Types.Tasks,
      'title' | 'dueDate' | 'id' | 'code' | 'priority'
    > & {
        assignee: Array<
          { __typename?: 'user_task' } & {
            user: { __typename?: 'users' } & Pick<
              Types.Users,
              'displayName' | 'photoUrl'
            >
          }
        >
      }
  >
}

export type TaskDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type TaskDetailQuery = { __typename?: 'query_root' } & {
  tasks: Array<
    { __typename?: 'tasks' } & Pick<
      Types.Tasks,
      'id' | 'priority' | 'title' | 'description' | 'code'
    > & {
        assignee: Array<
          { __typename?: 'user_task' } & {
            user: { __typename?: 'users' } & Pick<
              Types.Users,
              'id' | 'email' | 'displayName' | 'photoUrl'
            >
          }
        >
      }
  >
}

export type UpdateTaskMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  object: Types.Tasks_Set_Input
}>

export type UpdateTaskMutation = { __typename?: 'mutation_root' } & {
  update_tasks?: Types.Maybe<
    { __typename?: 'tasks_mutation_response' } & Pick<
      Types.Tasks_Mutation_Response,
      'affected_rows'
    > & { returning: Array<{ __typename?: 'tasks' } & Pick<Types.Tasks, 'id'>> }
  >
}

export type TaskCommentQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
  limit: Types.Scalars['Int']
  offset: Types.Scalars['Int']
}>

export type TaskCommentQuery = { __typename?: 'query_root' } & {
  tasks: Array<
    { __typename?: 'tasks' } & Pick<
      Types.Tasks,
      'createdAt' | 'startDate' | 'dueDate'
    > & {
        owner?: Types.Maybe<
          { __typename?: 'users' } & Pick<Types.Users, 'displayName'>
        >
        comments: Array<
          { __typename?: 'task_comment' } & Pick<
            Types.Task_Comment,
            'id' | 'text' | 'attachments' | 'createdAt'
          > & {
              user: { __typename?: 'users' } & Pick<
                Types.Users,
                'displayName' | 'photoUrl' | 'id'
              >
            }
        >
        comments_aggregate: { __typename?: 'task_comment_aggregate' } & {
          aggregate?: Types.Maybe<
            { __typename?: 'task_comment_aggregate_fields' } & Pick<
              Types.Task_Comment_Aggregate_Fields,
              'count'
            >
          >
        }
      }
  >
}

export type DeleteTaskMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DeleteTaskMutation = { __typename?: 'mutation_root' } & {
  delete_tasks?: Types.Maybe<
    { __typename?: 'tasks_mutation_response' } & Pick<
      Types.Tasks_Mutation_Response,
      'affected_rows'
    > & { returning: Array<{ __typename?: 'tasks' } & Pick<Types.Tasks, 'id'>> }
  >
}

export type CountTotalTaskQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  now: Types.Scalars['timestamptz']
}>

export type CountTotalTaskQuery = { __typename?: 'query_root' } & {
  todo: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  inProgress: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  done: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  overDue: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type CountStackTaskQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  now: Types.Scalars['timestamptz']
}>

export type CountStackTaskQuery = { __typename?: 'query_root' } & {
  todo: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  todoLate: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  inProgress: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  inProgressLate: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
  done: { __typename?: 'tasks_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tasks_aggregate_fields' } & Pick<
        Types.Tasks_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type AssignTaskMutationVariables = Types.Exact<{
  object: Types.User_Task_Insert_Input
}>

export type AssignTaskMutation = { __typename?: 'mutation_root' } & {
  insert_user_task?: Types.Maybe<
    { __typename?: 'user_task_mutation_response' } & Pick<
      Types.User_Task_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user_task' } & {
            user: { __typename?: 'users' } & Pick<
              Types.Users,
              'id' | 'displayName'
            >
          }
        >
      }
  >
}

export type RemoveAssigneeMutationVariables = Types.Exact<{
  userId: Types.Scalars['String']
  taskId: Types.Scalars['String']
}>

export type RemoveAssigneeMutation = { __typename?: 'mutation_root' } & {
  delete_user_task?: Types.Maybe<
    { __typename?: 'user_task_mutation_response' } & Pick<
      Types.User_Task_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user_task' } & {
            user: { __typename?: 'users' } & Pick<
              Types.Users,
              'id' | 'displayName'
            >
          }
        >
      }
  >
}

export type GetWorkspacesQueryVariables = Types.Exact<{
  userId?: Types.Maybe<Types.Scalars['String']>
}>

export type GetWorkspacesQuery = { __typename?: 'query_root' } & {
  user_workspace: Array<
    { __typename?: 'user_workspace' } & {
      workspace: { __typename?: 'workspaces' } & Pick<Types.Workspaces, 'id'>
    }
  >
}

export type PostUserWorkspaceMutationVariables = Types.Exact<{
  object: Types.User_Workspace_Insert_Input
}>

export type PostUserWorkspaceMutation = { __typename?: 'mutation_root' } & {
  insert_user_workspace?: Types.Maybe<
    { __typename?: 'user_workspace_mutation_response' } & Pick<
      Types.User_Workspace_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user_workspace' } & Pick<
            Types.User_Workspace,
            'userId'
          > & {
              workspace: { __typename?: 'workspaces' } & Pick<
                Types.Workspaces,
                'id'
              >
            }
        >
      }
  >
}

export type DeleteMemberMutationVariables = Types.Exact<{
  userId: Types.Scalars['String']
  workspaceId: Types.Scalars['String']
}>

export type DeleteMemberMutation = { __typename?: 'mutation_root' } & {
  delete_user_workspace?: Types.Maybe<
    { __typename?: 'user_workspace_mutation_response' } & Pick<
      Types.User_Workspace_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user_workspace' } & Pick<
            Types.User_Workspace,
            'userId'
          >
        >
      }
  >
}

export type MembersQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.User_Workspace_Bool_Exp>
}>

export type MembersQuery = { __typename?: 'query_root' } & {
  user_workspace: Array<
    { __typename?: 'user_workspace' } & {
      user: { __typename?: 'users' } & Pick<
        Types.Users,
        'id' | 'displayName' | 'photoUrl'
      >
    }
  >
}

export type UsersQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type UsersQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<
      Types.Users,
      'id' | 'firstName' | 'lastName' | 'photoUrl' | 'email'
    >
  >
}

export type UpdateProfileMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  object: Types.Users_Set_Input
}>

export type UpdateProfileMutation = { __typename?: 'mutation_root' } & {
  update_users?: Types.Maybe<
    { __typename?: 'users_mutation_response' } & Pick<
      Types.Users_Mutation_Response,
      'affected_rows'
    > & { returning: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id'>> }
  >
}

export type PostWorkspaceMutationVariables = Types.Exact<{
  object: Types.Workspaces_Insert_Input
}>

export type PostWorkspaceMutation = { __typename?: 'mutation_root' } & {
  insert_workspaces?: Types.Maybe<
    { __typename?: 'workspaces_mutation_response' } & Pick<
      Types.Workspaces_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'workspaces' } & Pick<Types.Workspaces, 'id'>
        >
      }
  >
}

export type GetWorkspaceDetailQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type GetWorkspaceDetailQuery = { __typename?: 'query_root' } & {
  detail: Array<
    { __typename?: 'workspaces' } & Pick<
      Types.Workspaces,
      'title' | 'ownerId' | 'description'
    >
  >
  members: Array<
    { __typename?: 'user_workspace' } & {
      user: { __typename?: 'users' } & Pick<
        Types.Users,
        'id' | 'displayName' | 'photoUrl'
      >
    }
  >
}

export type UpdateWorkspaceMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  object: Types.Workspaces_Set_Input
}>

export type UpdateWorkspaceMutation = { __typename?: 'mutation_root' } & {
  update_workspaces?: Types.Maybe<
    { __typename?: 'workspaces_mutation_response' } & Pick<
      Types.Workspaces_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'workspaces' } & Pick<Types.Workspaces, 'id'>
        >
      }
  >
}

export type DeleteWorkspaceMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type DeleteWorkspaceMutation = { __typename?: 'mutation_root' } & {
  delete_workspaces?: Types.Maybe<
    { __typename?: 'workspaces_mutation_response' } & Pick<
      Types.Workspaces_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'workspaces' } & Pick<Types.Workspaces, 'id' | 'title'>
        >
      }
  >
}
