import { 
  OPEN_MODAL, 
  CLOSE_MODAL, 
  ITEM_NAME, 
  TRANSPORT_NUMBER, 
  DELIVERY_COMPANY_ID, 
  addModalActionType,
  RESET_MODAL
 } from '../actions/addModalAction';

interface state {
  visibility: string,
  opacity: number,
  height: string,
  itemNameState: string,
  transportNumberState: any,
  deliveryIdState: string,
}

const initalState: state = {
  visibility: 'hidden',
  height: '0px',
  opacity: 0,
  itemNameState: '',
  transportNumberState: 0,
  deliveryIdState: '',
};

export default function addModalReducer(state: state = initalState, action: addModalActionType): state {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        visibility: 'visible',
        height: '190px',
        opacity: 1,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        visibility: 'hidden',
        height: '0px',
        opacity: 0,
      };
    }
    case RESET_MODAL: {
      return {
        ...state,
        visibility: 'hidden',
        height: '0px',
        opacity: 0,
        itemNameState: '',
        transportNumberState: '',
      };
    }
    case ITEM_NAME: {
      return {
        ...state,
        itemNameState: action.payload,
      };
    }
    case TRANSPORT_NUMBER: {
      return {
        ...state,
        transportNumberState: action.payload,
      };
    }
    case DELIVERY_COMPANY_ID: {
      return {
        ...state,
        deliveryIdState: action.payload
      };
    }
    default:
      return state;
  }
}