import { GET_USERPROFILE, EDIT_USERNAME } from "../type.actions";

const initialState = {
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case EDIT_USERNAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
