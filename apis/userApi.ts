import { context } from "@/components/admin/enums"
import axios, { AxiosResponse } from "axios"

export interface UserType{
    user_id : string
    email : string
    nickname : string
    password : string
    create_at: string
    updated_at: string
}
export const userJoinApi =async (
    payload: {
    email : string,
    password : string,
    nickname : string}) => {
    const headers = context.headers    
    try{
        const response : AxiosResponse<unknown, UserType[]> = 
        await axios.post(`${context.server}/users`,payload, {headers})
        
    } catch(err){
        
    }
}