import {
    DEFAULT,
    MATCH_ACTION,
    MATCH_COMPLETE,
} from "../constants/match";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const matchAction = (payload: any) => {
    return {
        type: MATCH_ACTION,
        payload
    }
}

export const matchComplete = (payload: any) => {
    return {
        type: MATCH_COMPLETE,
        payload
    }
}
