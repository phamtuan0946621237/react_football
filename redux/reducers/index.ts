import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage';

import macth from './match'
import club from './club'
import league from './league'
// const keyConfig = {
//     key: 'rootStorage',
//     storage: AsyncStorage,
// }
export default combineReducers({
    macth,
    club,
    league
})