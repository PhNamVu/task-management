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
  jsonb: any
  timestamptz: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
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

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: 'boards'
  createdAt: Scalars['timestamptz']
  id: Scalars['String']
  status?: Maybe<Scalars['String']>
  /** An array relationship */
  tasks: Array<Tasks>
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate
  title: Scalars['String']
  /** An object relationship */
  workspace: Workspaces
  workspaceId: Scalars['String']
}

/** columns and relationships of "boards" */
export type BoardsTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

/** columns and relationships of "boards" */
export type BoardsTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate'
  aggregate?: Maybe<Boards_Aggregate_Fields>
  nodes: Array<Boards>
}

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Boards_Max_Fields>
  min?: Maybe<Boards_Min_Fields>
}

/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Boards_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "boards" */
export type Boards_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Boards_Max_Order_By>
  min?: Maybe<Boards_Min_Order_By>
}

/** input type for inserting array relation for remote table "boards" */
export type Boards_Arr_Rel_Insert_Input = {
  data: Array<Boards_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Boards_On_Conflict>
}

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: Maybe<Array<Boards_Bool_Exp>>
  _not?: Maybe<Boards_Bool_Exp>
  _or?: Maybe<Array<Boards_Bool_Exp>>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
  tasks?: Maybe<Tasks_Bool_Exp>
  title?: Maybe<String_Comparison_Exp>
  workspace?: Maybe<Workspaces_Bool_Exp>
  workspaceId?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint */
  BoardsPkey = 'boards_pkey',
}

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  tasks?: Maybe<Tasks_Arr_Rel_Insert_Input>
  title?: Maybe<Scalars['String']>
  workspace?: Maybe<Workspaces_Obj_Rel_Insert_Input>
  workspaceId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "boards" */
export type Boards_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  title?: Maybe<Order_By>
  workspaceId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "boards" */
export type Boards_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  title?: Maybe<Order_By>
  workspaceId?: Maybe<Order_By>
}

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Boards>
}

/** input type for inserting object relation for remote table "boards" */
export type Boards_Obj_Rel_Insert_Input = {
  data: Boards_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Boards_On_Conflict>
}

/** on conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint
  update_columns?: Array<Boards_Update_Column>
  where?: Maybe<Boards_Bool_Exp>
}

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  tasks_aggregate?: Maybe<Tasks_Aggregate_Order_By>
  title?: Maybe<Order_By>
  workspace?: Maybe<Workspaces_Order_By>
  workspaceId?: Maybe<Order_By>
}

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>
  /** delete data from the table: "task_comment" */
  delete_task_comment?: Maybe<Task_Comment_Mutation_Response>
  /** delete single row from the table: "task_comment" */
  delete_task_comment_by_pk?: Maybe<Task_Comment>
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>
  /** delete data from the table: "user_task" */
  delete_user_task?: Maybe<User_Task_Mutation_Response>
  /** delete single row from the table: "user_task" */
  delete_user_task_by_pk?: Maybe<User_Task>
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
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>
  /** insert data into the table: "task_comment" */
  insert_task_comment?: Maybe<Task_Comment_Mutation_Response>
  /** insert a single row into the table: "task_comment" */
  insert_task_comment_one?: Maybe<Task_Comment>
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>
  /** insert data into the table: "user_task" */
  insert_user_task?: Maybe<User_Task_Mutation_Response>
  /** insert a single row into the table: "user_task" */
  insert_user_task_one?: Maybe<User_Task>
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
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>
  /** update data of the table: "task_comment" */
  update_task_comment?: Maybe<Task_Comment_Mutation_Response>
  /** update single row of the table: "task_comment" */
  update_task_comment_by_pk?: Maybe<Task_Comment>
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>
  /** update data of the table: "user_task" */
  update_user_task?: Maybe<User_Task_Mutation_Response>
  /** update single row of the table: "user_task" */
  update_user_task_by_pk?: Maybe<User_Task>
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
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Task_CommentArgs = {
  where: Task_Comment_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Task_Comment_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_User_TaskArgs = {
  where: User_Task_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Task_By_PkArgs = {
  taskId: Scalars['String']
  userId: Scalars['String']
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
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>
  on_conflict?: Maybe<Boards_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input
  on_conflict?: Maybe<Boards_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Task_CommentArgs = {
  objects: Array<Task_Comment_Insert_Input>
  on_conflict?: Maybe<Task_Comment_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Task_Comment_OneArgs = {
  object: Task_Comment_Insert_Input
  on_conflict?: Maybe<Task_Comment_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>
  on_conflict?: Maybe<Tasks_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input
  on_conflict?: Maybe<Tasks_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_TaskArgs = {
  objects: Array<User_Task_Insert_Input>
  on_conflict?: Maybe<User_Task_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Task_OneArgs = {
  object: User_Task_Insert_Input
  on_conflict?: Maybe<User_Task_On_Conflict>
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
export type Mutation_RootUpdate_BoardsArgs = {
  _set?: Maybe<Boards_Set_Input>
  where: Boards_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _set?: Maybe<Boards_Set_Input>
  pk_columns: Boards_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Task_CommentArgs = {
  _append?: Maybe<Task_Comment_Append_Input>
  _delete_at_path?: Maybe<Task_Comment_Delete_At_Path_Input>
  _delete_elem?: Maybe<Task_Comment_Delete_Elem_Input>
  _delete_key?: Maybe<Task_Comment_Delete_Key_Input>
  _prepend?: Maybe<Task_Comment_Prepend_Input>
  _set?: Maybe<Task_Comment_Set_Input>
  where: Task_Comment_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Task_Comment_By_PkArgs = {
  _append?: Maybe<Task_Comment_Append_Input>
  _delete_at_path?: Maybe<Task_Comment_Delete_At_Path_Input>
  _delete_elem?: Maybe<Task_Comment_Delete_Elem_Input>
  _delete_key?: Maybe<Task_Comment_Delete_Key_Input>
  _prepend?: Maybe<Task_Comment_Prepend_Input>
  _set?: Maybe<Task_Comment_Set_Input>
  pk_columns: Task_Comment_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _inc?: Maybe<Tasks_Inc_Input>
  _set?: Maybe<Tasks_Set_Input>
  where: Tasks_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _inc?: Maybe<Tasks_Inc_Input>
  _set?: Maybe<Tasks_Set_Input>
  pk_columns: Tasks_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_TaskArgs = {
  _set?: Maybe<User_Task_Set_Input>
  where: User_Task_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Task_By_PkArgs = {
  _set?: Maybe<User_Task_Set_Input>
  pk_columns: User_Task_Pk_Columns_Input
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
  /** An array relationship */
  boards: Array<Boards>
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>
  /** execute function "search_users" which returns "users" */
  search_users: Array<Users>
  /** execute function "search_users" and query aggregates on result of table type "users" */
  search_users_aggregate: Users_Aggregate
  /** fetch data from the table: "task_comment" */
  task_comment: Array<Task_Comment>
  /** fetch aggregated fields from the table: "task_comment" */
  task_comment_aggregate: Task_Comment_Aggregate
  /** fetch data from the table: "task_comment" using primary key columns */
  task_comment_by_pk?: Maybe<Task_Comment>
  /** An array relationship */
  tasks: Array<Tasks>
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>
  /** fetch data from the table: "user_task" */
  user_task: Array<User_Task>
  /** fetch aggregated fields from the table: "user_task" */
  user_task_aggregate: User_Task_Aggregate
  /** fetch data from the table: "user_task" using primary key columns */
  user_task_by_pk?: Maybe<User_Task>
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

export type Query_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
}

export type Query_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
}

export type Query_RootBoards_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootSearch_UsersArgs = {
  args: Search_Users_Args
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootSearch_Users_AggregateArgs = {
  args: Search_Users_Args
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootTask_CommentArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

export type Query_RootTask_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

export type Query_RootTask_Comment_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

export type Query_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

export type Query_RootTasks_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootUser_TaskArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

export type Query_RootUser_Task_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

export type Query_RootUser_Task_By_PkArgs = {
  taskId: Scalars['String']
  userId: Scalars['String']
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

export type Search_Users_Args = {
  search?: Maybe<Scalars['String']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** An array relationship */
  boards: Array<Boards>
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>
  /** execute function "search_users" which returns "users" */
  search_users: Array<Users>
  /** execute function "search_users" and query aggregates on result of table type "users" */
  search_users_aggregate: Users_Aggregate
  /** fetch data from the table: "task_comment" */
  task_comment: Array<Task_Comment>
  /** fetch aggregated fields from the table: "task_comment" */
  task_comment_aggregate: Task_Comment_Aggregate
  /** fetch data from the table: "task_comment" using primary key columns */
  task_comment_by_pk?: Maybe<Task_Comment>
  /** An array relationship */
  tasks: Array<Tasks>
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>
  /** fetch data from the table: "user_task" */
  user_task: Array<User_Task>
  /** fetch aggregated fields from the table: "user_task" */
  user_task_aggregate: User_Task_Aggregate
  /** fetch data from the table: "user_task" using primary key columns */
  user_task_by_pk?: Maybe<User_Task>
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

export type Subscription_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
}

export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
}

export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootSearch_UsersArgs = {
  args: Search_Users_Args
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootSearch_Users_AggregateArgs = {
  args: Search_Users_Args
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootTask_CommentArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

export type Subscription_RootTask_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

export type Subscription_RootTask_Comment_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootUser_TaskArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

export type Subscription_RootUser_Task_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

export type Subscription_RootUser_Task_By_PkArgs = {
  taskId: Scalars['String']
  userId: Scalars['String']
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

/** columns and relationships of "task_comment" */
export type Task_Comment = {
  __typename?: 'task_comment'
  attachments?: Maybe<Scalars['jsonb']>
  createdAt: Scalars['timestamptz']
  id: Scalars['String']
  ownerId: Scalars['String']
  /** An object relationship */
  task: Tasks
  taskId: Scalars['String']
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: Users
}

/** columns and relationships of "task_comment" */
export type Task_CommentAttachmentsArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "task_comment" */
export type Task_Comment_Aggregate = {
  __typename?: 'task_comment_aggregate'
  aggregate?: Maybe<Task_Comment_Aggregate_Fields>
  nodes: Array<Task_Comment>
}

/** aggregate fields of "task_comment" */
export type Task_Comment_Aggregate_Fields = {
  __typename?: 'task_comment_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Task_Comment_Max_Fields>
  min?: Maybe<Task_Comment_Min_Fields>
}

/** aggregate fields of "task_comment" */
export type Task_Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Task_Comment_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "task_comment" */
export type Task_Comment_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Task_Comment_Max_Order_By>
  min?: Maybe<Task_Comment_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Task_Comment_Append_Input = {
  attachments?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "task_comment" */
export type Task_Comment_Arr_Rel_Insert_Input = {
  data: Array<Task_Comment_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Task_Comment_On_Conflict>
}

/** Boolean expression to filter rows from the table "task_comment". All fields are combined with a logical 'AND'. */
export type Task_Comment_Bool_Exp = {
  _and?: Maybe<Array<Task_Comment_Bool_Exp>>
  _not?: Maybe<Task_Comment_Bool_Exp>
  _or?: Maybe<Array<Task_Comment_Bool_Exp>>
  attachments?: Maybe<Jsonb_Comparison_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  ownerId?: Maybe<String_Comparison_Exp>
  task?: Maybe<Tasks_Bool_Exp>
  taskId?: Maybe<String_Comparison_Exp>
  text?: Maybe<String_Comparison_Exp>
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "task_comment" */
export enum Task_Comment_Constraint {
  /** unique or primary key constraint */
  TaskCommentPkey = 'task_comment_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Task_Comment_Delete_At_Path_Input = {
  attachments?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Task_Comment_Delete_Elem_Input = {
  attachments?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Task_Comment_Delete_Key_Input = {
  attachments?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "task_comment" */
export type Task_Comment_Insert_Input = {
  attachments?: Maybe<Scalars['jsonb']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  task?: Maybe<Tasks_Obj_Rel_Insert_Input>
  taskId?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Task_Comment_Max_Fields = {
  __typename?: 'task_comment_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  taskId?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "task_comment" */
export type Task_Comment_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  taskId?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Task_Comment_Min_Fields = {
  __typename?: 'task_comment_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  taskId?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "task_comment" */
export type Task_Comment_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  taskId?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** response of any mutation on the table "task_comment" */
export type Task_Comment_Mutation_Response = {
  __typename?: 'task_comment_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Task_Comment>
}

/** on conflict condition type for table "task_comment" */
export type Task_Comment_On_Conflict = {
  constraint: Task_Comment_Constraint
  update_columns?: Array<Task_Comment_Update_Column>
  where?: Maybe<Task_Comment_Bool_Exp>
}

/** Ordering options when selecting data from "task_comment". */
export type Task_Comment_Order_By = {
  attachments?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  task?: Maybe<Tasks_Order_By>
  taskId?: Maybe<Order_By>
  text?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: task_comment */
export type Task_Comment_Pk_Columns_Input = {
  id: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Task_Comment_Prepend_Input = {
  attachments?: Maybe<Scalars['jsonb']>
}

/** select columns of table "task_comment" */
export enum Task_Comment_Select_Column {
  /** column name */
  Attachments = 'attachments',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "task_comment" */
export type Task_Comment_Set_Input = {
  attachments?: Maybe<Scalars['jsonb']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  ownerId?: Maybe<Scalars['String']>
  taskId?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "task_comment" */
export enum Task_Comment_Update_Column {
  /** column name */
  Attachments = 'attachments',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks'
  /** An array relationship */
  assignee: Array<User_Task>
  /** An aggregate relationship */
  assignee_aggregate: User_Task_Aggregate
  /** An object relationship */
  board: Boards
  boardId: Scalars['String']
  code: Scalars['Int']
  /** An array relationship */
  comments: Array<Task_Comment>
  /** An aggregate relationship */
  comments_aggregate: Task_Comment_Aggregate
  createdAt?: Maybe<Scalars['timestamptz']>
  createdBy?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
  /** An object relationship */
  owner?: Maybe<Users>
  priority?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "tasks" */
export type TasksAssigneeArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

/** columns and relationships of "tasks" */
export type TasksAssignee_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

/** columns and relationships of "tasks" */
export type TasksCommentsArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

/** columns and relationships of "tasks" */
export type TasksComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate'
  aggregate?: Maybe<Tasks_Aggregate_Fields>
  nodes: Array<Tasks>
}

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields'
  avg?: Maybe<Tasks_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Tasks_Max_Fields>
  min?: Maybe<Tasks_Min_Fields>
  stddev?: Maybe<Tasks_Stddev_Fields>
  stddev_pop?: Maybe<Tasks_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Tasks_Stddev_Samp_Fields>
  sum?: Maybe<Tasks_Sum_Fields>
  var_pop?: Maybe<Tasks_Var_Pop_Fields>
  var_samp?: Maybe<Tasks_Var_Samp_Fields>
  variance?: Maybe<Tasks_Variance_Fields>
}

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tasks_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tasks" */
export type Tasks_Aggregate_Order_By = {
  avg?: Maybe<Tasks_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Tasks_Max_Order_By>
  min?: Maybe<Tasks_Min_Order_By>
  stddev?: Maybe<Tasks_Stddev_Order_By>
  stddev_pop?: Maybe<Tasks_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Tasks_Stddev_Samp_Order_By>
  sum?: Maybe<Tasks_Sum_Order_By>
  var_pop?: Maybe<Tasks_Var_Pop_Order_By>
  var_samp?: Maybe<Tasks_Var_Samp_Order_By>
  variance?: Maybe<Tasks_Variance_Order_By>
}

/** input type for inserting array relation for remote table "tasks" */
export type Tasks_Arr_Rel_Insert_Input = {
  data: Array<Tasks_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tasks_On_Conflict>
}

/** aggregate avg on columns */
export type Tasks_Avg_Fields = {
  __typename?: 'tasks_avg_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "tasks" */
export type Tasks_Avg_Order_By = {
  code?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: Maybe<Array<Tasks_Bool_Exp>>
  _not?: Maybe<Tasks_Bool_Exp>
  _or?: Maybe<Array<Tasks_Bool_Exp>>
  assignee?: Maybe<User_Task_Bool_Exp>
  board?: Maybe<Boards_Bool_Exp>
  boardId?: Maybe<String_Comparison_Exp>
  code?: Maybe<Int_Comparison_Exp>
  comments?: Maybe<Task_Comment_Bool_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  createdBy?: Maybe<String_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  dueDate?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  owner?: Maybe<Users_Bool_Exp>
  priority?: Maybe<String_Comparison_Exp>
  startDate?: Maybe<Timestamptz_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey',
}

/** input type for incrementing numeric columns in table "tasks" */
export type Tasks_Inc_Input = {
  code?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  assignee?: Maybe<User_Task_Arr_Rel_Insert_Input>
  board?: Maybe<Boards_Obj_Rel_Insert_Input>
  boardId?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['Int']>
  comments?: Maybe<Task_Comment_Arr_Rel_Insert_Input>
  createdAt?: Maybe<Scalars['timestamptz']>
  createdBy?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  owner?: Maybe<Users_Obj_Rel_Insert_Input>
  priority?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields'
  boardId?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  createdBy?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  priority?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "tasks" */
export type Tasks_Max_Order_By = {
  boardId?: Maybe<Order_By>
  code?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  createdBy?: Maybe<Order_By>
  description?: Maybe<Order_By>
  dueDate?: Maybe<Order_By>
  id?: Maybe<Order_By>
  priority?: Maybe<Order_By>
  startDate?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields'
  boardId?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  createdBy?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  priority?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "tasks" */
export type Tasks_Min_Order_By = {
  boardId?: Maybe<Order_By>
  code?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  createdBy?: Maybe<Order_By>
  description?: Maybe<Order_By>
  dueDate?: Maybe<Order_By>
  id?: Maybe<Order_By>
  priority?: Maybe<Order_By>
  startDate?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>
}

/** input type for inserting object relation for remote table "tasks" */
export type Tasks_Obj_Rel_Insert_Input = {
  data: Tasks_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Tasks_On_Conflict>
}

/** on conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint
  update_columns?: Array<Tasks_Update_Column>
  where?: Maybe<Tasks_Bool_Exp>
}

/** Ordering options when selecting data from "tasks". */
export type Tasks_Order_By = {
  assignee_aggregate?: Maybe<User_Task_Aggregate_Order_By>
  board?: Maybe<Boards_Order_By>
  boardId?: Maybe<Order_By>
  code?: Maybe<Order_By>
  comments_aggregate?: Maybe<Task_Comment_Aggregate_Order_By>
  createdAt?: Maybe<Order_By>
  createdBy?: Maybe<Order_By>
  description?: Maybe<Order_By>
  dueDate?: Maybe<Order_By>
  id?: Maybe<Order_By>
  owner?: Maybe<Users_Order_By>
  priority?: Maybe<Order_By>
  startDate?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** primary key columns input for table: tasks */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  BoardId = 'boardId',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'dueDate',
  /** column name */
  Id = 'id',
  /** column name */
  Priority = 'priority',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  boardId?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  createdBy?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  priority?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Tasks_Stddev_Fields = {
  __typename?: 'tasks_stddev_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "tasks" */
export type Tasks_Stddev_Order_By = {
  code?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Tasks_Stddev_Pop_Fields = {
  __typename?: 'tasks_stddev_pop_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "tasks" */
export type Tasks_Stddev_Pop_Order_By = {
  code?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Tasks_Stddev_Samp_Fields = {
  __typename?: 'tasks_stddev_samp_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "tasks" */
export type Tasks_Stddev_Samp_Order_By = {
  code?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Tasks_Sum_Fields = {
  __typename?: 'tasks_sum_fields'
  code?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "tasks" */
export type Tasks_Sum_Order_By = {
  code?: Maybe<Order_By>
}

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  BoardId = 'boardId',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'dueDate',
  /** column name */
  Id = 'id',
  /** column name */
  Priority = 'priority',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Tasks_Var_Pop_Fields = {
  __typename?: 'tasks_var_pop_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "tasks" */
export type Tasks_Var_Pop_Order_By = {
  code?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Tasks_Var_Samp_Fields = {
  __typename?: 'tasks_var_samp_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "tasks" */
export type Tasks_Var_Samp_Order_By = {
  code?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Tasks_Variance_Fields = {
  __typename?: 'tasks_variance_fields'
  code?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "tasks" */
export type Tasks_Variance_Order_By = {
  code?: Maybe<Order_By>
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

/** columns and relationships of "user_task" */
export type User_Task = {
  __typename?: 'user_task'
  /** An object relationship */
  task: Tasks
  taskId: Scalars['String']
  /** An object relationship */
  user: Users
  userId: Scalars['String']
}

/** aggregated selection of "user_task" */
export type User_Task_Aggregate = {
  __typename?: 'user_task_aggregate'
  aggregate?: Maybe<User_Task_Aggregate_Fields>
  nodes: Array<User_Task>
}

/** aggregate fields of "user_task" */
export type User_Task_Aggregate_Fields = {
  __typename?: 'user_task_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<User_Task_Max_Fields>
  min?: Maybe<User_Task_Min_Fields>
}

/** aggregate fields of "user_task" */
export type User_Task_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Task_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_task" */
export type User_Task_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<User_Task_Max_Order_By>
  min?: Maybe<User_Task_Min_Order_By>
}

/** input type for inserting array relation for remote table "user_task" */
export type User_Task_Arr_Rel_Insert_Input = {
  data: Array<User_Task_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<User_Task_On_Conflict>
}

/** Boolean expression to filter rows from the table "user_task". All fields are combined with a logical 'AND'. */
export type User_Task_Bool_Exp = {
  _and?: Maybe<Array<User_Task_Bool_Exp>>
  _not?: Maybe<User_Task_Bool_Exp>
  _or?: Maybe<Array<User_Task_Bool_Exp>>
  task?: Maybe<Tasks_Bool_Exp>
  taskId?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  userId?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user_task" */
export enum User_Task_Constraint {
  /** unique or primary key constraint */
  UserTaskPkey = 'user_task_pkey',
}

/** input type for inserting data into table "user_task" */
export type User_Task_Insert_Input = {
  task?: Maybe<Tasks_Obj_Rel_Insert_Input>
  taskId?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  userId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Task_Max_Fields = {
  __typename?: 'user_task_max_fields'
  taskId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user_task" */
export type User_Task_Max_Order_By = {
  taskId?: Maybe<Order_By>
  userId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Task_Min_Fields = {
  __typename?: 'user_task_min_fields'
  taskId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user_task" */
export type User_Task_Min_Order_By = {
  taskId?: Maybe<Order_By>
  userId?: Maybe<Order_By>
}

/** response of any mutation on the table "user_task" */
export type User_Task_Mutation_Response = {
  __typename?: 'user_task_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Task>
}

/** on conflict condition type for table "user_task" */
export type User_Task_On_Conflict = {
  constraint: User_Task_Constraint
  update_columns?: Array<User_Task_Update_Column>
  where?: Maybe<User_Task_Bool_Exp>
}

/** Ordering options when selecting data from "user_task". */
export type User_Task_Order_By = {
  task?: Maybe<Tasks_Order_By>
  taskId?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  userId?: Maybe<Order_By>
}

/** primary key columns input for table: user_task */
export type User_Task_Pk_Columns_Input = {
  taskId: Scalars['String']
  userId: Scalars['String']
}

/** select columns of table "user_task" */
export enum User_Task_Select_Column {
  /** column name */
  TaskId = 'taskId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "user_task" */
export type User_Task_Set_Input = {
  taskId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** update columns of table "user_task" */
export enum User_Task_Update_Column {
  /** column name */
  TaskId = 'taskId',
  /** column name */
  UserId = 'userId',
}

/** columns and relationships of "user_workspace" */
export type User_Workspace = {
  __typename?: 'user_workspace'
  createdAt?: Maybe<Scalars['timestamptz']>
  /** joined, request */
  status?: Maybe<Scalars['String']>
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
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
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
  createdAt?: Maybe<Scalars['timestamptz']>
  /** joined, request */
  status?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  userId?: Maybe<Scalars['String']>
  workspace?: Maybe<Workspaces_Obj_Rel_Insert_Input>
  workspaceId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Workspace_Max_Fields = {
  __typename?: 'user_workspace_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  /** joined, request */
  status?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user_workspace" */
export type User_Workspace_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  /** joined, request */
  status?: Maybe<Order_By>
  userId?: Maybe<Order_By>
  workspaceId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Workspace_Min_Fields = {
  __typename?: 'user_workspace_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  /** joined, request */
  status?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user_workspace" */
export type User_Workspace_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  /** joined, request */
  status?: Maybe<Order_By>
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
  createdAt?: Maybe<Order_By>
  status?: Maybe<Order_By>
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
  CreatedAt = 'createdAt',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "user_workspace" */
export type User_Workspace_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>
  /** joined, request */
  status?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  workspaceId?: Maybe<Scalars['String']>
}

/** update columns of table "user_workspace" */
export enum User_Workspace_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Status = 'status',
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
  task_comments: Array<Task_Comment>
  /** An aggregate relationship */
  task_comments_aggregate: Task_Comment_Aggregate
  /** An array relationship */
  tasks: Array<User_Task>
  /** An array relationship */
  tasksByCreatedBy: Array<Tasks>
  /** An aggregate relationship */
  tasksByCreatedBy_aggregate: Tasks_Aggregate
  /** An aggregate relationship */
  tasks_aggregate: User_Task_Aggregate
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
export type UsersTask_CommentsArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTask_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Task_Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Task_Comment_Order_By>>
  where?: Maybe<Task_Comment_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTasksArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTasksByCreatedByArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTasksByCreatedBy_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tasks_Order_By>>
  where?: Maybe<Tasks_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Task_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Task_Order_By>>
  where?: Maybe<User_Task_Bool_Exp>
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
  displayName?: Maybe<String_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  firstName?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  lastName?: Maybe<String_Comparison_Exp>
  phone?: Maybe<String_Comparison_Exp>
  photoUrl?: Maybe<String_Comparison_Exp>
  role?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
  task_comments?: Maybe<Task_Comment_Bool_Exp>
  tasks?: Maybe<User_Task_Bool_Exp>
  tasksByCreatedBy?: Maybe<Tasks_Bool_Exp>
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
  task_comments?: Maybe<Task_Comment_Arr_Rel_Insert_Input>
  tasks?: Maybe<User_Task_Arr_Rel_Insert_Input>
  tasksByCreatedBy?: Maybe<Tasks_Arr_Rel_Insert_Input>
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
  task_comments_aggregate?: Maybe<Task_Comment_Aggregate_Order_By>
  tasksByCreatedBy_aggregate?: Maybe<Tasks_Aggregate_Order_By>
  tasks_aggregate?: Maybe<User_Task_Aggregate_Order_By>
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
  /** An array relationship */
  boards: Array<Boards>
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate
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
export type WorkspacesBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
}

/** columns and relationships of "workspaces" */
export type WorkspacesBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Boards_Order_By>>
  where?: Maybe<Boards_Bool_Exp>
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
  boards?: Maybe<Boards_Bool_Exp>
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
  boards?: Maybe<Boards_Arr_Rel_Insert_Input>
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
  boards_aggregate?: Maybe<Boards_Aggregate_Order_By>
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
