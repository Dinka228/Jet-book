import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createGlossary = async(glossary)=>{
    const {data} = await $authHost.post('glossary/create',glossary)
    return data
}
export const fetchGlossary = async(userId)=>{
    const {data} = await $authHost.get(`glossary/getAll/${userId}`)
    return data
}