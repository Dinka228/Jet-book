import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createChapterContent = async(chapterContent)=>{
    const {data} = await $authHost.post('api/chapterContent',chapterContent)
    return data
}
export const fetchChapterContent = async(chapterId)=>{
    const {data} = await $authHost.get(`api/chapterContent/${chapterId}`)
    return data
}
export const updateChapterContent = async(updateData)=>{
    const {data} = await $authHost.post(`api/chapterContent/update`,updateData)
    return data
}
export const deleteChapterContent = async(chapterId)=>{
    const {data} = await $authHost.post(`api/chapterContent/delete/${chapterId}`)
    return data
}