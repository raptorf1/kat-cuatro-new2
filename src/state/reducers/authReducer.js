const initialState = {
  userLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH':
      return {
        userLoggedIn: !state.userLoggedIn
      }
    default:
      return state
  }
}

export default authReducer
