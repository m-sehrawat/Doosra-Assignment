import { applyMiddleware, combineReducers, createStore } from 'redux';
import { riderReducer } from '../features/rider/reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({ riderReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));