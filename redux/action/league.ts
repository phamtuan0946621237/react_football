import {
    DEFAULT,
    LEAGUE_ACTION,
    LEAGUE_COMPLETE
} from "../constants/league";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const leagueAction = (payload: any) => {
    return {
        type: LEAGUE_ACTION,
        payload
    }
}

export const leagueComplete = (payload: any) => {
    return {
        type: LEAGUE_COMPLETE,
        payload
    }
}
