import {
    DEFAULT,
    MATCH_COMPLETE,
} from "../constants/match";

const initialState = {
    matchResponse: undefined,
}

 const matchReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // macth
        case MATCH_COMPLETE:
            return {
                ...state,
                matchResponse: action.payload
            }
        default:
         break;
        
    }
    return state
}

export default matchReducers