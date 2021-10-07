import { createAction } from "redux-actions"

export const OPEN_ERROR = 'err/OPEN_ERROR'
export const CLOSE_ERROR = 'err/CLOSE_ERROR'

export const openError = createAction(OPEN_ERROR)
export const closeError = createAction(CLOSE_ERROR)

export type errModalType = 
  | ReturnType<typeof openError>
  | ReturnType<typeof closeError>