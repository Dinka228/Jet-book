import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createAnswer = async(answer)=>{
    const {data} = await $authHost.post('api/answer',answer)
    return data
}
export const fetchAnswer = async()=>{
    const {data} = await $host.get('api/answer')
    return data
}
export const fetchOneAnswer = async(id)=>{
    const {data} = await $authHost.get(`api/answer/${id}`)
    return data
}