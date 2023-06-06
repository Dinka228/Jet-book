import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createReadThemes = async(readThemes)=>{
    const {data} = await $authHost.post('api/readThemes',readThemes)
    return data
}
export const fetchReadThemes = async()=>{
    const {data} = await $authHost.get(`api/readThemes`)
    return data
}