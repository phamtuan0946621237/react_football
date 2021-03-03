import {
    DEFAULT,
    LEAGUE_COMPLETE,
    LEAGUE_DETAIL_COMPLETE,
    TRANSFER_LEAGUE_COMPLETE,
    MATCHES_LEAGUE_COMPLETE,
    STATS_LEAGUE_COMPLETE
} from "../constants/league";

const initialState = {
    leagueResponse: undefined,
    leagueDetailResponse: undefined,
    transferResponse : undefined,
    macthesResponse : undefined,
    statsResponse : undefined
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
        case LEAGUE_DETAIL_COMPLETE:
            return {
                ...state,
                leagueDetailResponse: action.payload
            }
            case TRANSFER_LEAGUE_COMPLETE:
            return {
                ...state,
                transferResponse: action.payload
            }
            case MATCHES_LEAGUE_COMPLETE:
            return {
                ...state,
                macthesResponse: action.payload
            }
            case STATS_LEAGUE_COMPLETE:
            return {
                ...state,
                statsResponse: action.payload
            }
            
        default:
            break;

    }
    return state
}

export default leagueReducers