import {context} from '@/components/admin/enums'
import { currentTime } from '@/components/admin/utils'
import axios, {AxiosResponse} from 'axios'
export interface UserType{
    user_id : string
    email : string
    nickname : string
    password : string
    create_at: string
    updated_at: string
}

export const joinApi = async (payload:{email:string, 
    nickname:string, password:string})=>{
    try{
        const response: AxiosResponse<unknown,UserType[]> = await axios.post (`${context.server}`)
        return response.data    
    }catch(err){
        console.log(` ${currentTime} : userSaga 내부에서 join 실패 `)}
}