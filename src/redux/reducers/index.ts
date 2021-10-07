import { combineReducers } from 'redux';

import cardReducer from './cardReducer';
import addModalReducer from './addModalReducer';
import motionReducer from './motionReducer'

export interface IReducerState {
    cardReducer: any,
    addModalReducer: any,
    motionReducer: any,
}

const rootReducer = combineReducers({
  cardReducer,
  addModalReducer,
  motionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;