import {
    DEFAULT,
    LEAGUE_ACTION,
    LEAGUE_COMPLETE,
    LEAGUE_DETAIL_ACTION,
    LEAGUE_DETAIL_COMPLETE,
    TRANSFER_LEAGUE_ACTION,
    TRANSFER_LEAGUE_COMPLETE,
    MATCHES_LEAGUE_ACTION,
    MATCHES_LEAGUE_COMPLETE,
    STATS_LEAGUE_ACTION,
    STATS_LEAGUE_COMPLETE
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

export const leagueDetailAction = (payload: any) => {
    return {
        type: LEAGUE_DETAIL_ACTION,
        payload
    }
}

export const leagueDetailComplete = (payload: any) => {
    return {
        type: LEAGUE_DETAIL_COMPLETE,
        payload
    }
}
// 
export const transferAction = (payload: any) => {
    return {
        type: TRANSFER_LEAGUE_ACTION,
        payload
    }
}

export const transferComplete = (payload: any) => {
    return {
        type: TRANSFER_LEAGUE_COMPLETE,
        payload
    }
}

export const matchesLeagueAction = (payload: any) => {
    return {
        type: MATCHES_LEAGUE_ACTION,
        payload
    }
}

export const matchesLeagueComplete = (payload: any) => {
    return {
        type: MATCHES_LEAGUE_COMPLETE,
        payload
    }
}

export const statsLeagueAction = (payload: any) => {
    return {
        type: STATS_LEAGUE_ACTION,
        payload
    }
}

export const statsLeagueComplete = (payload: any) => {
    return {
        type: STATS_LEAGUE_COMPLETE,
        payload
    }
}