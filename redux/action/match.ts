import {
    DEFAULT,
    MATCH_ACTION,
    MATCH_COMPLETE,
    MATCH_DETAIL_ACTION,
    MATCH_DETAIL_COMPLETE
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

export const matchDetailAction = (payload: any) => {
    return {
        type: MATCH_DETAIL_ACTION,
        payload
    }
}

export const matchDetailComplete = (payload: any) => {
    return {
        type: MATCH_DETAIL_COMPLETE,
        payload
    }
}
