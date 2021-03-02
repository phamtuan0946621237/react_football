import {
    DEFAULT,
    LEAGUE_COMPLETE
} from "../constants/league";

const initialState = {
    leagueResponse: undefined,
}

const leagueReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // club
        case LEAGUE_COMPLETE:
            return {
                ...state,
                leagueResponse: action.payload
            }
        default:
            break;

    }
    return state
}

export default leagueReducers