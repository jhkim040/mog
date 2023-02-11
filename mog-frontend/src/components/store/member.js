export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const CHANGE_NICKNAME = 'CHANGE_NICKNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const CHANGE_PROFILE_IMAGE = 'CHANGE_PROFILE_IMAGE';

// action
export const login = (member) => ({
  type: LOGIN,
  payload: member,
});

export const logout = () => ({
  type: LOGOUT,
});

export const delete_account = () => ({
  type: DELETE_ACCOUNT,
});

export const change_nickname = (member) => ({
  type: CHANGE_NICKNAME,
  payload: member,
});

export const change_password = () => ({
  type: CHANGE_PASSWORD,
});

export const change_message = (member) => ({
  type: CHANGE_MESSAGE,
  payload: member,
});

export const change_profile_image = (member) => ({
  type: CHANGE_PROFILE_IMAGE,
  payload: member,
});

// state
const initState = {
  id: 0,
  email: '',
  nickname: '',
  message: '',
  storedFileName: '',
  accessToken: '',
  isLogin: false,
};

const member = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
        message: action.payload.message,
        storedFileName: action.payload.storedFileName,
        accessToken: localStorage.getItem('accessToken'),
        isLogin: true,
      };

    case LOGOUT:
      localStorage.clear();
      // console.log('member logout');
      return initState;

    case DELETE_ACCOUNT:
      localStorage.clear();
      return initState;

    case CHANGE_PASSWORD:
      localStorage.clear();
      return initState;

    case CHANGE_NICKNAME:
      return {
        ...state,
        nickname: action.payload.nickname,
      };

    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case CHANGE_PROFILE_IMAGE:
      return {
        ...state,
        storedFileName: action.payload.storedFileName,
      };
    default:
      return state;
  }
};
export default member;
