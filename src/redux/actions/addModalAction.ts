import { createAction } from 'redux-actions'
export const OPEN_MODAL = 'add/OPEN_MODAL';
export const CLOSE_MODAL = 'add/CLOSE_MODAL'
export const ITEM_NAME = 'add/ITEM_NAME';
export const TRANSPORT_NUMBER = 'add/TRANSPORT_NUMBER'
export const DELIVERY_COMPANY_ID = 'add/DELIVERY_COMPANY_ID';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const itemName = createAction(ITEM_NAME)
export const transportNumber = createAction(TRANSPORT_NUMBER)
export const deliveryId = createAction(DELIVERY_COMPANY_ID)

export type addModalActionType =
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>
  | ReturnType<typeof itemName>
  | ReturnType<typeof transportNumber>
  | ReturnType<typeof deliveryId>;
