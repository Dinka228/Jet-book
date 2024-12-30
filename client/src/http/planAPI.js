import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createPlan = async(plan)=>{
    const {data} = await $authHost.post('plan/create',plan)
    return data
}
export const fetchPlan = async()=>{
    const {data} = await $authHost.get(`plan/getAll`)
    return data
}
export const deletePlan = async(planId)=>{
    const {data} = await $authHost.post(`plan/delete/${planId}`)
    return data
}