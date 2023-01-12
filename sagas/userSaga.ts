import {PayloadAction} from "@reduxjs/toolkit"
import {call, delay, put, takeLatest} from 'redux-saga/effects'
import {string} from 'yup'
import userActions from '@/modules/user'
import { currentTime } from "@/components/admin/utils";
//api


interface UserJoinType{
    type:string,
    payload:{
        email: string,
        password: string,
        nickname: string
    }
}

interface UserJoinSuccessType{
    type:string,
    payload:{
        nickname: string
    }
}

function* join(user:UserJoinType){
    try{
        console.log(`${currentTime} : userSaga 내부에서 fastapi에 넘기는 값 ${JSON.stringify(user)}`)
        //const response : UserJoinSuccessType = yield userJoinApi(user.payload)
        //console.log(`${currentTime} : userSaga 내부에서 join 성공 ${JSON.stringify(response)}`)
    }catch(err){
        console.log(`${currentTime} : userSaga 내부에서 join 실패`)
    }
}
export function* watchjoin(){
    yield takeLatest (userActions.actions.joinRequest, join)
}