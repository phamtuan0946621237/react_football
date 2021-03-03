import {
    DEFAULT,
    PLAYER_ACTION,
    PLAYER_COMPLETE
} from "../constants/player";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const playerAction = (payload: any) => {
    return {
        type: PLAYER_ACTION,
        payload
    }
}

export const playerComplete = (payload: any) => {
    return {
        type: PLAYER_COMPLETE,
        payload
    }
}
