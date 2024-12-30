import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createTest = async(test)=>{
    const {data} = await $authHost.post('test/create',test)
    return data
}
export const fetchTest = async(chapterId)=>{
    const {data} = await $authHost.get(`test/getOne/${chapterId}`)
    return data
}
export const fetchTeachersTest = async(creatorId)=>{
    const {data} = await $authHost.get(`test/getAllTeachersTest/${creatorId}`)
    return data
}
export const fetchThemesTest = async(themesId)=>{
    const {data} = await $authHost.get(`test/getAllThemesTest/${themesId}`)
    return data
}