import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  // user is Auth0 profile
  account: {},
  // account is api profile
  posts: [],
  activeProfile: null,
  newer: null,
  older: null
})
