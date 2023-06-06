import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createSubject = async(subj)=>{
    const {data} = await $authHost.post('api/subject',subj)
    return data
}
export const fetchSubject = async()=>{
    const {data} = await $authHost.get(`api/subject`)
    return data
}