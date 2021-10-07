import { ADD_CARD, cardActionType, DEL_CARD  } from '../actions/cardAction';

const initalState: any = {
  deliveres: [],
};

export default function cardReducer(state = initalState, action: cardActionType): any {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        deliveres: [...state.deliveres, action.payload]
      };
    }
    case DEL_CARD: {
      console.log('asdw',state.deliveres.filter((data: any) => data.id !== action.payload))
      return {
        ...state,
        deliveres: state.deliveres.filter((data: any) => data.id !== action.payload),
      };
    }
    default:
      return state;
  }
}