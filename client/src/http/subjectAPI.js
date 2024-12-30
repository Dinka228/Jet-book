import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createSubject = async(subj)=>{
    const {data} = await $authHost.post('subject/create',subj)
    return data
}
export const fetchSubject = async()=>{
    const {data} = await $authHost.get(`subject/getAll`)
    return data
}
export const fetchMySubject = async(speciality)=>{
    const {data} = await $authHost.get(`subject/getAllMySubject/${speciality}`)
    return data
}