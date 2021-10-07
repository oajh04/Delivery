import { createAction } from "redux-actions";

export const OPEN_MOTION = 'toggle/OPEN_MOTION';
export const CLOSE_MOTION = 'toggle/CLOSE_MOTION';

export const openMotion = createAction(OPEN_MOTION);
export const closeMotion = createAction(CLOSE_MOTION);

export type motionActionType = 
  | ReturnType<typeof openMotion>
  | ReturnType<typeof closeMotion>;