import { combineReducers } from 'redux';
import operationsReducer from './operationsReducers';

export default combineReducers({
  operations: operationsReducer,
});
