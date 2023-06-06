import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createReadChapter = async(readChapter)=>{
    const {data} = await $authHost.post('api/readChapter',readChapter)
    return data
}
export const fetchReadChapter = async()=>{
    const {data} = await $authHost.get(`api/readChapter`)
    return data
}