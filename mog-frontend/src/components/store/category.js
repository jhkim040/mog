export const VIEW_CATEGORY = 'VIEW_CATEGORY';
export const INSERT_CATEGORY = 'INSERT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const LIST_CATEGORY = 'LIST_CATEGORY';
export const LOGOUT_CATEGORY = 'LOGOUT_CATEGORY';
export const DELETE_ACCOUNT_CATEGORY = 'DELETE_ACCOUNT_CATEGORY';

export const view_category = (category) => ({
  type: VIEW_CATEGORY,
  payload: category,
});

export const insert_category = (category) => ({
  type: INSERT_CATEGORY,
  payload: category,
});

export const delete_category = (category) => ({
  type: DELETE_CATEGORY,
  payload: category,
});

export const update_category = (category) => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

export const list_category = (categoryList) => ({
  type: LIST_CATEGORY,
  payload: categoryList,
});

export const logout_category = () => ({
  type: LOGOUT_CATEGORY,
});

export const delete_account_category = () => ({
  type: DELETE_ACCOUNT_CATEGORY,
});

// state
const initState = { categoryList: [] };

const category = (state = initState, action) => {
  switch (action.type) {
    case VIEW_CATEGORY:
      const categoryList = state.categoryList;
      const view_index = categoryList.findIndex(
        (category) => category.id === action.payload.id,
      );
      const category = categoryList[view_index];
      if (category) {
        return {
          ...initState,
          categoryList: [...initState.categoryList, category],
        };
      }
      return initState;

    case INSERT_CATEGORY:
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categoryList: state.categoryList.filter(
          (item) => item.id !== action.payload.id,
        ),
      };

    case UPDATE_CATEGORY:
      const index = state.categoryList.findIndex(
        (item) => item.id === action.payload.id,
      );
      const newArray = [...state.categoryList];
      newArray[index].name = action.payload.name;
      return {
        ...state,
        categoryList: newArray,
      };

    case LIST_CATEGORY:
      // console.log('store');
      // console.log(action.payload);
      return { ...state, categoryList: action.payload };

    case LOGOUT_CATEGORY:
      // console.log('cate logout');
      return initState;

    case DELETE_ACCOUNT_CATEGORY:
      return initState;

    default:
      return state;
  }
};
export default category;
