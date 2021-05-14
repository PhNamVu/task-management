import createAuthApolloClient from './auth-client'
import createUnAuthClient from './unauth-client'

export function createClient(state: any) {
  let client: any
  let role: any
  let isUserLoggedin: any

  if (!state.user) {
    client = createUnAuthClient()
    role = 'nonUser'
    isUserLoggedin = false
  } else if (state.user && !state.user.emailVerified) {
    client = createUnAuthClient()
    role = 'nonVerifiedUser'
    isUserLoggedin = false
  } else if (
    Object.prototype.hasOwnProperty.call(state, 'https://hasura.io/jwt/claims')
  ) {
    client = createUnAuthClient()
    role = 'noRoleUser'
    isUserLoggedin = false
  } else {
    client = createAuthApolloClient(state.user)
    role =
      state.customClaims.claims['https://hasura.io/jwt/claims'][
        'x-hasura-default-role'
      ]
    isUserLoggedin = true
  }

  return [client, role, isUserLoggedin]
}
