import { OPEN_MODAL, CLOSE_MODAL  } from '../actions/addModalAction';

const initalState: any = {
  isOpen: false,
};

export default function addModalReducer(state = initalState, action: any): any {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false
      };
    }
    default:
      return state;
  }
}