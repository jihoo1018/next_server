import {Article} from '@/modules/types'
import { currentTime } from '@/components/admin/utils'
import axios, { AxiosResponse } from 'axios'
export const article = {
    async join(payload: Article){
            try{
                const response : AxiosResponse<any, Article[]> =
                await axios.post(`http://localhost:8000/article/write`, payload, {headers: {
                    "Content-Type" : "application/json",
                    Authorization: "JWT fefege...",
                }})
                if(response.data === "success"){
                    alert(' 결과: API 내부 join 성공  '+ JSON.stringify(response.data))
                }else{
                    alert(` 결과: ${response.data.msg}`)
                }
                
                return response
            }catch(err){
                console.log(` ${currentTime} : userSaga 내부에서 join 실패 `)
            }
        }
    }