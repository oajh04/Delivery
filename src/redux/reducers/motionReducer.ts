import { CLOSE_MOTION, motionActionType, OPEN_MOTION } from "../actions/motionAction";


const initState: any = {
    toggle: false
}

export default function motionReducer(state: any = initState, action: motionActionType): any{
    switch (action.type) {
        case OPEN_MOTION : {
            return {
                ...state,
                toggle: true
            };
        }
        case CLOSE_MOTION : {
            return {
                ...state,
                toggle: false
            };
        }
        default:
            return state;
    }
}