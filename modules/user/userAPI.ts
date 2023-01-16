import {context} from '@/components/admin/enums'
import { currentTime } from '@/components/admin/utils'
import axios, {AxiosResponse} from 'axios'
export interface UserType{
    user_id? : string,
    email? : string,
    password? : string,
    cpassword?: string, 
    username? : string,
    phone? : string,
    birth? : string,
    address? : string,
    job? : string,
    interests? : string,
    token? : string
    created? : string,
    modified? : string
}

export const joinApi = async (payload:{email:string, 
    nickname:string, password:string})=>{
    try{
        const response: AxiosResponse<unknown,UserType[]> = await axios.post (`${context.server}`)
        return response.data    
    }catch(err){
        console.log(` ${currentTime} : userSaga 내부에서 join 실패 `)}
}