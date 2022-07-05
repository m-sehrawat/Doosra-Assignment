import { applyMiddleware, combineReducers, createStore } from 'redux';
import { riderReducer } from '../features/rider/reducer';
import thunk from 'redux-thunk';
import { driverReducer } from '../features/driver/reducer';


const rootReducer = combineReducers({ riderReducer, driverReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));