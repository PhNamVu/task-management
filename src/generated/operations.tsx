import * as Types from './schemas'

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

export type GetWorkspaceDetailQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type GetWorkspaceDetailQuery = { __typename?: 'query_root' } & {
  detail: Array<
    { __typename?: 'workspaces' } & Pick<
      Types.Workspaces,
      'title' | 'ownerId' | 'status'
    >
  >
  total: { __typename?: 'user_workspace_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'user_workspace_aggregate_fields' } & Pick<
        Types.User_Workspace_Aggregate_Fields,
        'count'
      >
    >
  }
}

export type UpdateWorkspaceStatusMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  status?: Types.Maybe<Types.Scalars['String']>
}>

export type UpdateWorkspaceStatusMutation = { __typename?: 'mutation_root' } & {
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