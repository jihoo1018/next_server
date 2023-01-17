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
    token: 'original'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        joinRequest(state: UserState, action: PayloadAction<User>){
            alert(`2 joinRequest ${JSON.stringify(action.payload)}`)
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
            alert(`1. ${JSON.stringify(action.payload)}`)
            state.status = 'loading'
        },
        loginSuccess(state: UserState, {payload}){
            alert(`4. token >>>> payload is ${payload.token}`)
            state.status = 'idle'
            state.data = [...state.data, payload]
            state.token = payload.token
            alert(`5. &&&&&&token >>> state.token is ${state.token}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = [...state.data, payload]
        },
        logoutRequest(state: UserState) {
            state.status = 'loading';
            state.error = null;
        },
        logoutSuccess(state: UserState ){
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
        