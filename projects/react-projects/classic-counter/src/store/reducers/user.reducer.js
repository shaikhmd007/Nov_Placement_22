const INITIAL_STATE = {};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
