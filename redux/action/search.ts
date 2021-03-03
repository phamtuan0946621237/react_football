import {
    DEFAULT,
    SEARCH_ACTION,
    SEARCH_COMPLETE
} from "../constants/search";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const searchAction = (payload: any) => {
    return {
        type: SEARCH_ACTION,
        payload
    }
}

export const searchComplete = (payload: any) => {
    return {
        type: SEARCH_COMPLETE,
        payload
    }
}
