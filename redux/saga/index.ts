import { all, fork } from 'redux-saga/effects';
import * as Match from './match'
import * as Club from './club'
import * as League from './league'

export default function* rootSaga() {
    yield all([
        ...Object.values(Match),
        ...Object.values(Club),
        ...Object.values(League)
    ].map(fork));
}