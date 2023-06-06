import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createTest = async(test)=>{
    const {data} = await $authHost.post('api/test',test)
    return data
}
export const fetchOneTest = async(chapterId)=>{
    const {data} = await $authHost.get(`api/test/${chapterId}`)
    return data
}