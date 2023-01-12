import {all,fork} from "redux-saga/effects"
import{
    watchjoin
} from './userSaga'

export default function* rootSaga(){
    yield all ([
        fork(watchjoin)
    ])
}