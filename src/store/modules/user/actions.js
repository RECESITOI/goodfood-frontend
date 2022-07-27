export const USER_LOGIN = 'USER_LOGIN';
export const M_RESET_USER_STORE = 'M_RESET_USER_STORE';
export const M_SET_USER = 'M_SET_USER';

export const userLogIn = ({ payload }) => ({
  type: USER_LOGIN,
  payload
});
