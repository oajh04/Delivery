import { combineReducers } from 'redux';

import cardReducer from './cardReducer';
import addModalReducer from './addModalReducer';

export interface IReducerState {
    cardReducer: any
    addModalReducer: any
}

const rootReducer = combineReducers({
  cardReducer,
  addModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;