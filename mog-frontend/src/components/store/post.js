export const VIEW_POST = 'VIEW_POST';
export const INSERT_POST = 'INSERT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const LIST_POST = 'LIST_POST';
export const LOGOUT_POST = 'LOGOUT_POST';
export const DELETE_ALL_POST = 'DELETE_ALL_POST';

export const view_post = (post) => ({
  type: VIEW_POST,
  payload: post,
});

export const insert_post = (post) => ({
  type: INSERT_POST,
  payload: post,
});

export const delete_post = (post) => ({
  type: DELETE_POST,
  payload: post,
});

export const update_post = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// list_style :
// 1. list all posts (order by created-time)
// 2. list posts of single category
export const list_post = (postList) => ({
  type: LIST_POST,

  payload: postList,
});

export const logout_post = () => ({
  type: LOGOUT_POST,
});

export const delete_all_post = () => ({
  type: DELETE_ALL_POST,
});

// state
const initState = { postList: [] };

const post = (state = initState, action) => {
  switch (action.type) {
    case VIEW_POST:
      const postList = state.postList;
      const view_index = postList.findIndex(
        (post) => post.id === action.payload.id,
      );
      const post = postList[view_index];
      if (post) {
        return {
          ...initState,
          postList: [...initState.postList, post],
        };
      }
      return initState;

    case INSERT_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };

    case DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter(
          (item) => item.id !== action.payload.id,
        ),
      };

    case UPDATE_POST:
      const update_index = state.postList.findIndex(
        (item) => item.id === action.payload.id,
      );
      const newArray = [...state.postList];
      newArray[update_index].title = action.payload.title;
      newArray[update_index].content = action.payload.content;
      newArray[update_index].categoryId = action.payload.categoryId;
      return {
        ...state,
        postList: newArray,
      };

    case LIST_POST:
      return {
        ...state,
        postList: action.payload,
      };

    // 전체 게시글

    case LOGOUT_POST:
      return initState;

    case DELETE_ALL_POST:
      return initState;

    default:
      return state;
  }
};
export default post;
