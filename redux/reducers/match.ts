import {
    DEFAULT,
    MATCH_COMPLETE,
    MATCH_DETAIL_COMPLETE
} from "../constants/match";

const initialState = {
    matchResponse: undefined,
    matchDetailResponse : undefined
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
        
        case MATCH_DETAIL_COMPLETE:
            return {
                ...state,
                matchDetailResponse: action.payload
            }
            default:            
         break;
        
    }
    return state
}

export default matchReducers