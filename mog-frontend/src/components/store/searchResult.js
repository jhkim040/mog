export const LIST_SEARCH_RESULT = 'LIST_SEARCH_RESULT';
export const LOGOUT_SEARCH_RESULT = 'LOGOUT_SEARCH_RESULT';
export const DELETE_ALL_SEARCH_RESULT = 'DELETE_ALL_SEARCH_RESULT';

// list_style :
// 1. list all posts (order by created-time)
// 2. list posts of single category
export const list_search_result = (searchResultList) => ({
  type: LIST_SEARCH_RESULT,
  payload: searchResultList,
});

export const logout_search_result = () => ({
  type: LOGOUT_SEARCH_RESULT,
});

export const delete_all_search_result = () => ({
  type: DELETE_ALL_SEARCH_RESULT,
});

// state
const initState = { searchResultList: [] };

const searchResult = (state = initState, action) => {
  switch (action.type) {
    case LIST_SEARCH_RESULT:
      return {
        ...state,
        searchResultList: action.payload,
      };

    // 전체 게시글

    case LOGOUT_SEARCH_RESULT:
      return initState;

    case DELETE_ALL_SEARCH_RESULT:
      return initState;

    default:
      return state;
  }
};
export default searchResult;
