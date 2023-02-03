export const INSERT_CATEGORY = 'INSERT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const LIST_CATEGORY = 'LIST_CATEGORY';

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

// state
const initState = { categoryList: [] };

const category = (state = initState, action) => {
  switch (action) {
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
        (item) => item.id !== action.payload.id,
      );
      const newArray = [...state.categoryList];
      newArray[index].name = action.payload.name;
      return {
        ...state,
        categoryList: newArray,
      };

    case LIST_CATEGORY:
      return { ...state, categoryList: action.payload };

    default:
      return state;
  }
};
export default category;
