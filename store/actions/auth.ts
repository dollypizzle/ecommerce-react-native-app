import axios from '../../axios-order';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';


import { SET_CURRENT_USER } from './actionTypes';
import { AsyncStorage } from 'react-native';

export function setCurrentUser(user: any) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export const LOGOUT = 'LOGOUT';

export function login(action: { email: any; password: any; }) {
  return ((dispatch: (arg0: { type: string; user: any; }) => void) => {
    return axios.post('/login', action).then(res => {
      const token = res.data.token;
      const user = res.data.user;
      AsyncStorage.setItem('jwtToken', token);
      AsyncStorage.setItem('user', JSON.stringify(user));
      setAuthorizationToken(token);
      console.log(token)
      console.log(user)
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  });
}

export function signup(action: { email: any; password: any; firstname: any; lastname: any; phonenumber: any; }) {
  console.log(action)
  return (dispatch: (arg0: { type: string; user: any; }) => void) => {
    return axios.post('/register', action).then(res => {
      const token = res.data.token;
      const user = res.data.user;
      console.log(token)
      AsyncStorage.setItem('jwtToken', token);
      AsyncStorage.setItem('user', JSON.stringify(user));
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}

export function logout() {
  AsyncStorage.removeItem('jwtToken');
  AsyncStorage.removeItem('user');
 
  return { type: LOGOUT }
} 