// import numberReducer from './status/reducer' 
// import errorReducer from './error/reducer' 
// import currentWeatherReducer from './CurrentWeather/reducer' 
// import fourDayWeatherReducer from './FourDayWeather/reducer' 
// import loginReducer from './Login/reducer'
// import registerReducer from './Register/reducer'
import {combineReducers} from 'redux'
import { StateType } from 'typesafe-actions'
// import listProductionReducer from './Production/reducer'
// import detailProductionReducer from './DetailProduction/reducer'
const rootReducers = combineReducers({
    // currentWeather : currentWeatherReducer,
    // fourDayWeather : fourDayWeatherReducer,
    // loginReducer : loginReducer,
    // registerReducer : registerReducer,
    // listProductionReducer :listProductionReducer,
    // detailProductionReducer : detailProductionReducer
})

export default rootReducers;

export type RootState = StateType<typeof rootReducers>