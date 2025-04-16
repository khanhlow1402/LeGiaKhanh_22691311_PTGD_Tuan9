import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  count: counterReducer,

});

const store = configureStore({ reducer: rootReducer });
export default store;
