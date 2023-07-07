import { combineReducers } from 'redux';
import catalogReducer from './catalogReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  // Add other reducers here
});

export default rootReducer;