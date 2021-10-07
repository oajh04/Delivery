import { CLOSE_MOTION, motionActionType, OPEN_MOTION } from "../actions/motionAction";

interface state {
    toggle: boolean,
    toggleId: string
}

const initState: state = {
    toggle: false,
    toggleId: '',
}

export default function motionReducer(state: state = initState, action: motionActionType): state{
    switch (action.type) {
        case OPEN_MOTION : {
            return {
                ...state,
                toggle: true,
                toggleId: action.payload,
            };
        }
        case CLOSE_MOTION : {
            return {
                ...state,
                toggle: false,
                toggleId: action.payload,
            };
        }
        default:
            return state;
    }
}