import { all, fork } from "redux-saga/effects"
import{
    watchAdd
} from "./articleSaga"

export default function* rootSaga(){
    yield all([ fork(watchAdd)])
}