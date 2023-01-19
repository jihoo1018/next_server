import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserLoginInput} from '@/modules/types'
import { AppState } from "../store";
import { createSelector } from '@reduxjs/toolkit'; 

type UserState = {
    data: User[]
    status: 'idle' | 'loading' | 'failed'
    isLoggined: boolean
    error: any
    token: string

}


const initialState: UserState = {
    data: [],
    status: 'idle',
    isLoggined: false,
    error: null,
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        joinRequest(state: UserState, action: PayloadAction<User>){
            state.status = 'loading'
            state.error = null
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = [...state.data, payload]
        },
        loginRequest(state: UserState, action: PayloadAction<UserLoginInput>){
            state.status = 'loading'
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            state.token = payload.token
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = [...state.data, payload]
        },
        logoutRequest(state: UserState, {payload}) {
            alert(`5. token >>> state.token is ${payload}`)
            state.status = 'loading';
            state.error = null;
            state.token = ""
        },
        logoutSuccess(state: UserState){
            state.status = 'idle'
            window.location.href = '/'
        },
        logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
            state.status = 'failed';
            state.error = action.payload;
        },

        // 회원정보
        setUserInfo(state: UserState) {
            state.status = 'idle';
            state
        }

    }
})

const {reducer, actions} = userSlice
export const {joinRequest, joinSuccess, joinFailure,
            loginRequest, loginSuccess, loginFailure,
            logoutRequest, logoutSuccess, logoutFailure
} = userSlice.actions
export const userAction = actions
export default reducer
        