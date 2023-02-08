import { combineReducers } from 'redux';
import member from '../store/member';
import category from '../store/category';
import post from '../store/post';
import searchResult from '../store/searchResult';

const rootReducer = combineReducers({
  member,
  category,
  post,
  searchResult,
});
export default rootReducer;
