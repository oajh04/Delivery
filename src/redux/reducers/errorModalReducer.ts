import { CLOSE_ERROR, errModalType, OPEN_ERROR } from "../actions/errorModalAction";

interface IErrorType {
    isError: string,
    errorMsg: string
}

const initState = {
    isError: 'hidden',
    errorMsg: '',
}

export default function errorModalReducer(state: IErrorType = initState, action: errModalType): IErrorType {
    switch(action.type){
        case OPEN_ERROR : {
            return {
                ...state,
                isError: 'visible',
                errorMsg: action.payload
            };
        }
        case CLOSE_ERROR : {
            return {
                ...state,
                isError: 'hidden',
                errorMsg: ''
            }
        }
        default:
            return state;
    }
}