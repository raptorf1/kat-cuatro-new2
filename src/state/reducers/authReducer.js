const initialState = {
  userLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH':
      return {
        userLoggedIn: true
      }
    default:
      return state
  }
}

export default authReducer
