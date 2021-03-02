import {
    DEFAULT,
    CLUB_ACTION,
    CLUB_COMPLETE,
    SQUAD_ACTION,
    SQUAD_COMPLETE,
    FIXTURES_ACTION,
    FIXTURES_COMPLETE,
    TRANSFER_ACTION,
    TRANSFER_COMPLETE
} from "../constants/club";

export const actionDefault = () => {
    return {
        type: DEFAULT
    }
}
// match
export const clubAction = (payload: any) => {
    return {
        type: CLUB_ACTION,
        payload
    }
}

export const clubComplete = (payload: any) => {
    return {
        type: CLUB_COMPLETE,
        payload
    }
}

export const squadAction = (payload: any) => {
    return {
        type: SQUAD_ACTION,
        payload
    }
}

export const squadComplete = (payload: any) => {
    return {
        type: SQUAD_COMPLETE,
        payload
    }
}

export const fixturesAction = (payload: any) => {
    return {
        type: FIXTURES_ACTION,
        payload
    }
}

export const fixturesComplete = (payload: any) => {
    return {
        type: FIXTURES_COMPLETE,
        payload
    }
}

export const transferAction = (payload: any) => {
    return {
        type: TRANSFER_ACTION,
        payload
    }
}

export const transferComplete = (payload: any) => {
    return {
        type: TRANSFER_COMPLETE,
        payload
    }
}