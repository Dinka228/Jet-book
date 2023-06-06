import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createThemes = async(themes)=>{
    const {data} = await $authHost.post('api/themes',themes)
    return data
}
export const fetchOneThemes = async(subjId)=>{
    const {data} = await $authHost.get(`api/themes/${subjId}`)
    return data
}
export const updateThemes = async(updateData)=>{
    const {data} = await $authHost.post(`api/themes/update`,updateData)
    return data
}