import {
    DEFAULT,
    NEWS_ACTION,
    NEWS_COMPLETE
} from "../constants/news";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const newsAction = (payload: any) => {
    return {
        type: NEWS_ACTION,
        payload
    }
}

export const newsComplete = (payload: any) => {
    return {
        type: NEWS_COMPLETE,
        payload
    }
}
