import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER } from '../actions/actionTypes';
import { LOGOUT } from '../actions/auth';


const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null
};

export default (state = initialState, action: { type: any; user: any; userId: any; token:any; }) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        token: action.token,
        isAuthenticated: !isEmpty(action.user),
        userId: action.userId
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
