import {
    DEFAULT,
    CLUB_COMPLETE,
    SQUAD_COMPLETE,
    FIXTURES_COMPLETE,
    TRANSFER_COMPLETE
} from "../constants/club";

const initialState = {
    clubResponse: undefined,
    suqadResponse: undefined,
    fixturesResponse: undefined,
    transferResponse: undefined
}

const clubReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // club
        case CLUB_COMPLETE:
            return {
                ...state,
                clubResponse: action.payload
            }
        case SQUAD_COMPLETE:
            return {
                ...state,
                suqadResponse: action.payload
            }
        case FIXTURES_COMPLETE:
            return {
                ...state,
                fixturesResponse: action.payload
            }
        case TRANSFER_COMPLETE:
            return {
                ...state,
                transferResponse: action.payload
            }
        default:
            break;

    }
    return state
}

export default clubReducers