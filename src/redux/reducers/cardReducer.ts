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
      return {
        ...state,
        // deliveres: state.deliveres.filter((track: any) => track.trackID !== trackID),
      };
    }
    default:
      return state;
  }
}