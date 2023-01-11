import {createSlice, PayloadAction} from "@reduxjs/toolkit"
export interface IUserType{
    user_id : string
    email : string
    nickname : string
    password : string
    create_at: string
    updated_at: string

}
export interface IUserState{
    data: IUserType[]
    state: 'idle' | 'loading '| 'failed'
}

const initialState:IUserState = {
    data:[],
    state:'idle'
}