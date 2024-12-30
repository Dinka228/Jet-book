import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createThemes = async(themes)=>{
    const {data} = await $authHost.post('themes/create',themes)
    return data
}
export const fetchThemes = async()=>{
    const {data} = await $authHost.get(`themes/getAll`)
    return data
}
export const fetchOneThemes = async(subjId)=>{
    const {data} = await $authHost.get(`themes/${subjId}`)
    return data
}
export const fetchTeacherThemes = async(fullName)=>{
    const {data} = await $authHost.get(`themes/getAllTeacherThemes/${fullName}`)
    return data
}
export const updateThemes = async(updateData)=>{
    const {data} = await $authHost.post(`themes/update`,updateData)
    return data
}
export const deleteTheme = async(themesId)=>{
    const {data} = await $authHost.post(`themes/delete/${themesId}`)
    return data
}