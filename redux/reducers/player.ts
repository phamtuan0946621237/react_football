import {
    DEFAULT,
    PLAYER_COMPLETE
} from "../constants/player";

const initialState = {
    playerResponse: undefined,
}

const playerReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case DEFAULT:
            return {
                ...initialState
            }
        // player
        case PLAYER_COMPLETE:
            return {
                ...state,
                playerResponse: action.payload
            }    
        default:
            break;

    }
    return state
}

export default playerReducers