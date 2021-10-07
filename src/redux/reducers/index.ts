import { combineReducers } from 'redux';

import cardReducer from './cardReducer';
import addModalReducer from './addModalReducer';
import motionReducer from './motionReducer'
import errorModalReducer from './errorModalReducer'

export interface IReducerState {
    cardReducer: any,
    addModalReducer: any,
    motionReducer: any,
    errorModalReducer: any,
}

const rootReducer = combineReducers({
  cardReducer,
  addModalReducer,
  motionReducer,
  errorModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;