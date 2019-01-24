import {
  LOGIN_AUTHED_USER,
  LOGOUT_AUTHED_USER,
} from '../actions/authedUser'

// for TESTING, just have a user logged in already!
// otherwise have to login at every refresh!
let initial = {
  'id': 'johndoe',
  'name': 'John Doe',
  'avatarPath': '/avatars/michaelScott.jpg'
}

// export default function authedUser(state = null, action) {
export default function authedUser(state = initial, action) {
  switch (action.type) {
    case LOGIN_AUTHED_USER :
      return {
        id: action.id,
        name: action.name,
        avatarPath: action.path
      }
    case LOGOUT_AUTHED_USER :
      return null
    default :
      return state
  }
}
