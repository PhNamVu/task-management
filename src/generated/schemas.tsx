export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

export type UserSetupInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  role: Scalars['String']
  token: Scalars['String']
}

export type UserSetupRes = {
  __typename?: 'UserSetupRes'
  message?: Maybe<Scalars['String']>
  status: Scalars['String']
  statusCode?: Maybe<Scalars['Int']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "user_workspace" */
  delete_user_workspace?: Maybe<User_Workspace_Mutation_Response>
  /** delete single row from the table: "user_workspace" */
  delete_user_workspace_by_pk?: Maybe<User_Workspace>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "workspaces" */
  delete_workspaces?: Maybe<Workspaces_Mutation_Response>
  /** delete single row from the table: "workspaces" */
  delete_workspaces_by_pk?: Maybe<Workspaces>
  /** insert data into the table: "user_workspace" */
  insert_user_workspace?: Maybe<User_Workspace_Mutation_Response>
  /** insert a single row into the table: "user_workspace" */
  insert_user_workspace_one?: Maybe<User_Workspace>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "workspaces" */
  insert_workspaces?: Maybe<Workspaces_Mutation_Response>
  /** insert a single row into the table: "workspaces" */
  insert_workspaces_one?: Maybe<Workspaces>
  /** update data of the table: "user_workspace" */
  update_user_workspace?: Maybe<User_Workspace_Mutation_Response>
  /** update single row of the table: "user_workspace" */
  update_user_workspace_by_pk?: Maybe<User_Workspace>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update data of the table: "workspaces" */
  update_workspaces?: Maybe<Workspaces_Mutation_Response>
  /** update single row of the table: "workspaces" */
  update_workspaces_by_pk?: Maybe<Workspaces>
  userSetup?: Maybe<UserSetupRes>
}

/** mutation root */
export type Mutation_RootDelete_User_WorkspaceArgs = {
  where: User_Workspace_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Workspace_By_PkArgs = {
  userId: Scalars['String']
  workspaceId: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_WorkspacesArgs = {
  where: Workspaces_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Workspaces_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_User_WorkspaceArgs = {
  objects: Array<User_Workspace_Insert_Input>
  on_conflict?: Maybe<User_Workspace_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Workspace_OneArgs = {
  object: User_Workspace_Insert_Input
  on_conflict?: Maybe<User_Workspace_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_WorkspacesArgs = {
  objects: Array<Workspaces_Insert_Input>
  on_conflict?: Maybe<Workspaces_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Workspaces_OneArgs = {
  object: Workspaces_Insert_Input
  on_conflict?: Maybe<Workspaces_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_User_WorkspaceArgs = {
  _set?: Maybe<User_Workspace_Set_Input>
  where: User_Workspace_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Workspace_By_PkArgs = {
  _set?: Maybe<User_Workspace_Set_Input>
  pk_columns: User_Workspace_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_WorkspacesArgs = {
  _set?: Maybe<Workspaces_Set_Input>
  where: Workspaces_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Workspaces_By_PkArgs = {
  _set?: Maybe<Workspaces_Set_Input>
  pk_columns: Workspaces_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUserSetupArgs = {
  input: UserSetupInput
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "user_workspace" */
  user_workspace: Array<User_Workspace>
  /** fetch aggregated fields from the table: "user_workspace" */
  user_workspace_aggregate: User_Workspace_Aggregate
  /** fetch data from the table: "user_workspace" using primary key columns */
  user_workspace_by_pk?: Maybe<User_Workspace>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  workspaces: Array<Workspaces>
  /** An aggregate relationship */
  workspaces_aggregate: Workspaces_Aggregate
  /** fetch data from the table: "workspaces" using primary key columns */
  workspaces_by_pk?: Maybe<Workspaces>
}

export type Query_RootUser_WorkspaceArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

export type Query_RootUser_Workspace_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

export type Query_RootUser_Workspace_By_PkArgs = {
  userId: Scalars['String']
  workspaceId: Scalars['String']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootWorkspacesArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

export type Query_RootWorkspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

export type Query_RootWorkspaces_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "user_workspace" */
  user_workspace: Array<User_Workspace>
  /** fetch aggregated fields from the table: "user_workspace" */
  user_workspace_aggregate: User_Workspace_Aggregate
  /** fetch data from the table: "user_workspace" using primary key columns */
  user_workspace_by_pk?: Maybe<User_Workspace>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  workspaces: Array<Workspaces>
  /** An aggregate relationship */
  workspaces_aggregate: Workspaces_Aggregate
  /** fetch data from the table: "workspaces" using primary key columns */
  workspaces_by_pk?: Maybe<Workspaces>
}

export type Subscription_RootUser_WorkspaceArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

export type Subscription_RootUser_Workspace_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

export type Subscription_RootUser_Workspace_By_PkArgs = {
  userId: Scalars['String']
  workspaceId: Scalars['String']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootWorkspacesArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

export type Subscription_RootWorkspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

export type Subscription_RootWorkspaces_By_PkArgs = {
  id: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user_workspace" */
export type User_Workspace = {
  __typename?: 'user_workspace'
  /** An object relationship */
  user: Users
  userId: Scalars['String']
  /** An object relationship */
  workspace: Workspaces
  workspaceId: Scalars['String']
}

/** aggregated selection of "user_workspace" */
export type User_Workspace_Aggregate = {
  __typename?: 'user_workspace_aggregate'
  aggregate?: Maybe<User_Workspace_Aggregate_Fields>
  nodes: Array<User_Workspace>
}

/** aggregate fields of "user_workspace" */
export type User_Workspace_Aggregate_Fields = {
  __typename?: 'user_workspace_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<User_Workspace_Max_Fields>
  min?: Maybe<User_Workspace_Min_Fields>
}

/** aggregate fields of "user_workspace" */
export type User_Workspace_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Workspace_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_workspace" */
export type User_Workspace_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<User_Workspace_Max_Order_By>
  min?: Maybe<User_Workspace_Min_Order_By>
}

/** input type for inserting array relation for remote table "user_workspace" */
export type User_Workspace_Arr_Rel_Insert_Input = {
  data: Array<User_Workspace_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<User_Workspace_On_Conflict>
}

/** Boolean expression to filter rows from the table "user_workspace". All fields are combined with a logical 'AND'. */
export type User_Workspace_Bool_Exp = {
  _and?: Maybe<Array<User_Workspace_Bool_Exp>>
  _not?: Maybe<User_Workspace_Bool_Exp>
  _or?: Maybe<Array<User_Workspace_Bool_Exp>>
  user?: Maybe<Users_Bool_Exp>
  userId?: Maybe<String_Comparison_Exp>
  workspace?: Maybe<Workspaces_Bool_Exp>
  workspaceId?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user_workspace" */
export enum User_Workspace_Constraint {
  /** unique or primary key constraint */
  UserWorkspacePkey = 'user_workspace_pkey',
}

/** input type for inserting data into table "user_workspace" */
export type User_Workspace_Insert_Input = {
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  userId?: Maybe<Scalars['String']>
  workspace?: Maybe<Workspaces_Obj_Rel_Insert_Input>
  workspaceId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Workspace_Max_Fields = {
  __typename?: 'user_workspace_max_fields'
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user_workspace" */
export type User_Workspace_Max_Order_By = {
  userId?: Maybe<Order_By>
  workspaceId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Workspace_Min_Fields = {
  __typename?: 'user_workspace_min_fields'
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user_workspace" */
export type User_Workspace_Min_Order_By = {
  userId?: Maybe<Order_By>
  workspaceId?: Maybe<Order_By>
}

/** response of any mutation on the table "user_workspace" */
export type User_Workspace_Mutation_Response = {
  __typename?: 'user_workspace_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Workspace>
}

/** on conflict condition type for table "user_workspace" */
export type User_Workspace_On_Conflict = {
  constraint: User_Workspace_Constraint
  update_columns?: Array<User_Workspace_Update_Column>
  where?: Maybe<User_Workspace_Bool_Exp>
}

/** Ordering options when selecting data from "user_workspace". */
export type User_Workspace_Order_By = {
  user?: Maybe<Users_Order_By>
  userId?: Maybe<Order_By>
  workspace?: Maybe<Workspaces_Order_By>
  workspaceId?: Maybe<Order_By>
}

/** primary key columns input for table: user_workspace */
export type User_Workspace_Pk_Columns_Input = {
  userId: Scalars['String']
  workspaceId: Scalars['String']
}

/** select columns of table "user_workspace" */
export enum User_Workspace_Select_Column {
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "user_workspace" */
export type User_Workspace_Set_Input = {
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** update columns of table "user_workspace" */
export enum User_Workspace_Update_Column {
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  created_at?: Maybe<Scalars['timestamptz']>
  dialCode?: Maybe<Scalars['String']>
  /** A computed field, executes function "display_name" */
  displayName?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['String']
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  role: Scalars['String']
  status?: Maybe<Scalars['String']>
  /** An array relationship */
  user_workspaces: Array<User_Workspace>
  /** An aggregate relationship */
  user_workspaces_aggregate: User_Workspace_Aggregate
  /** An array relationship */
  workspaces: Array<Workspaces>
  /** An aggregate relationship */
  workspaces_aggregate: Workspaces_Aggregate
}

/** columns and relationships of "users" */
export type UsersUser_WorkspacesArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Workspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersWorkspacesArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersWorkspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspaces_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Workspaces_Order_By>>
  where?: Maybe<Workspaces_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dialCode?: Maybe<String_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  firstName?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  lastName?: Maybe<String_Comparison_Exp>
  phone?: Maybe<String_Comparison_Exp>
  photoUrl?: Maybe<String_Comparison_Exp>
  role?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
  user_workspaces?: Maybe<User_Workspace_Bool_Exp>
  workspaces?: Maybe<Workspaces_Bool_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  dialCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  user_workspaces?: Maybe<User_Workspace_Arr_Rel_Insert_Input>
  workspaces?: Maybe<Workspaces_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  dialCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  dialCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>
  dialCode?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firstName?: Maybe<Order_By>
  id?: Maybe<Order_By>
  lastName?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  photoUrl?: Maybe<Order_By>
  role?: Maybe<Order_By>
  status?: Maybe<Order_By>
  user_workspaces_aggregate?: Maybe<User_Workspace_Aggregate_Order_By>
  workspaces_aggregate?: Maybe<Workspaces_Aggregate_Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DialCode = 'dialCode',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  dialCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DialCode = 'dialCode',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
}

/** columns and relationships of "workspaces" */
export type Workspaces = {
  __typename?: 'workspaces'
  createdAt?: Maybe<Scalars['timestamptz']>
  deletedAt?: Maybe<Scalars['timestamptz']>
  description: Scalars['String']
  id: Scalars['String']
  ownerId: Scalars['String']
  status?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  /** An array relationship */
  user_workspaces: Array<User_Workspace>
  /** An aggregate relationship */
  user_workspaces_aggregate: User_Workspace_Aggregate
}

/** columns and relationships of "workspaces" */
export type WorkspacesUser_WorkspacesArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

/** columns and relationships of "workspaces" */
export type WorkspacesUser_Workspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Workspace_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Workspace_Order_By>>
  where?: Maybe<User_Workspace_Bool_Exp>
}

/** aggregated selection of "workspaces" */
export type Workspaces_Aggregate = {
  __typename?: 'workspaces_aggregate'
  aggregate?: Maybe<Workspaces_Aggregate_Fields>
  nodes: Array<Workspaces>
}

/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_Fields = {
  __typename?: 'workspaces_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Workspaces_Max_Fields>
  min?: Maybe<Workspaces_Min_Fields>
}

/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Workspaces_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "workspaces" */
export type Workspaces_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Workspaces_Max_Order_By>
  min?: Maybe<Workspaces_Min_Order_By>
}

/** input type for inserting array relation for remote table "workspaces" */
export type Workspaces_Arr_Rel_Insert_Input = {
  data: Array<Workspaces_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Workspaces_On_Conflict>
}

/** Boolean expression to filter rows from the table "workspaces". All fields are combined with a logical 'AND'. */
export type Workspaces_Bool_Exp = {
  _and?: Maybe<Array<Workspaces_Bool_Exp>>
  _not?: Maybe<Workspaces_Bool_Exp>
  _or?: Maybe<Array<Workspaces_Bool_Exp>>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  ownerId?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_workspaces?: Maybe<User_Workspace_Bool_Exp>
}

/** unique or primary key constraints on table "workspaces" */
export enum Workspaces_Constraint {
  /** unique or primary key constraint */
  WorkspacesPkey = 'workspaces_pkey',
}

/** input type for inserting data into table "workspaces" */
export type Workspaces_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>
  deletedAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_workspaces?: Maybe<User_Workspace_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Workspaces_Max_Fields = {
  __typename?: 'workspaces_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  deletedAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "workspaces" */
export type Workspaces_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  deletedAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  status?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Workspaces_Min_Fields = {
  __typename?: 'workspaces_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  deletedAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "workspaces" */
export type Workspaces_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  deletedAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  status?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** response of any mutation on the table "workspaces" */
export type Workspaces_Mutation_Response = {
  __typename?: 'workspaces_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Workspaces>
}

/** input type for inserting object relation for remote table "workspaces" */
export type Workspaces_Obj_Rel_Insert_Input = {
  data: Workspaces_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Workspaces_On_Conflict>
}

/** on conflict condition type for table "workspaces" */
export type Workspaces_On_Conflict = {
  constraint: Workspaces_Constraint
  update_columns?: Array<Workspaces_Update_Column>
  where?: Maybe<Workspaces_Bool_Exp>
}

/** Ordering options when selecting data from "workspaces". */
export type Workspaces_Order_By = {
  createdAt?: Maybe<Order_By>
  deletedAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  status?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_workspaces_aggregate?: Maybe<User_Workspace_Aggregate_Order_By>
}

/** primary key columns input for table: workspaces */
export type Workspaces_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "workspaces" */
export enum Workspaces_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "workspaces" */
export type Workspaces_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>
  deletedAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "workspaces" */
export enum Workspaces_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}
