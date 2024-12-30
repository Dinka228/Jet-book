import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createChapter = async(chapter)=>{
    const {data} = await $authHost.post('chapter/create',chapter)
    return data
}
export const fetchChapter = async(themesId)=>{
    const {data} = await $authHost.get(`chapter/getAll/${themesId}`)
    return data
}
export const updateChapter = async(updateData)=>{
    const {data} = await $authHost.post(`chapter/update`,updateData)
    return data
}
export const deleteChapter = async(chapterId)=>{
    const {data} = await $authHost.post(`chapter/delete/${chapterId}`)
    return data
}