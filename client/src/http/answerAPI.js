import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createAnswer = async(answer)=>{
    const {data} = await $authHost.post('answer/create',answer)
    return data
}
export const fetchAnswer = async(id)=>{
    const {data} = await $authHost.get(`answer/getAll/${id}`)
    return data
}