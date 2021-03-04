import {
    DEFAULT,
    NEWS_COMPLETE
} from "../constants/news";

const initialState = {
    newsResponse: undefined,
}

const newsReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // club
        case NEWS_COMPLETE:
            return {
                ...state,
                newsResponse: action.payload
            }    
        default:
            break;

    }
    return state
}

export default newsReducers