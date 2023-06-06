import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createChapter = async(chapter)=>{
    const {data} = await $authHost.post('api/chapter',chapter)
    return data
}
export const fetchChapter = async(themesId)=>{
    const {data} = await $authHost.get(`api/chapter/${themesId}`)
    return data
}
export const updateChapter = async(updateData)=>{
    const {data} = await $authHost.post(`api/chapter/update`,updateData)
    return data
}