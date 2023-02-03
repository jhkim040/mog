import { combineReducers } from 'redux';
import member from '../store/member';
import category from '../store/category';

const rootReducer = combineReducers({
  member,
  category,
});
export default rootReducer;
