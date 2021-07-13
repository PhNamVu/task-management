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
}>

export type GetTasksQuery = { __typename?: 'query_root' } & {
  todo: Array<
    { __typename?: 'tasks' } & Pick<Types.Tasks, 'title' | 'dueDate' | 'id'> & {
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
  inProgress: Array<
    { __typename?: 'tasks' } & Pick<Types.Tasks, 'title' | 'dueDate' | 'id'> & {
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
  done: Array<
    { __typename?: 'tasks' } & Pick<Types.Tasks, 'title' | 'dueDate' | 'id'> & {
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

export type UpdateUserAvatarMutationVariables = Types.Exact<{
  photoUrl?: Types.Maybe<Types.Scalars['String']>
}>

export type UpdateUserAvatarMutation = { __typename?: 'mutation_root' } & {
  update_users?: Types.Maybe<
    { __typename?: 'users_mutation_response' } & Pick<
      Types.Users_Mutation_Response,
      'affected_rows'
    >
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
