import { createAction } from "redux-actions";

export const ADD_CARD = 'card/ADD_CARD';
export const DEL_CARD = 'card/DEL_CARD';

export const addCard = createAction(ADD_CARD);
export const delCard = createAction(DEL_CARD);

export type cardActionType =
  | ReturnType<typeof addCard>
  | ReturnType<typeof delCard>