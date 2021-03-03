import {
    DEFAULT,
    SEARCH_COMPLETE
} from "../constants/search";

const initialState = {
    searchResponse: undefined,
}

const searchReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // club
        case SEARCH_COMPLETE:
            return {
                ...state,
                searchResponse: action.payload
            }    
        default:
            break;

    }
    return state
}

export default searchReducers