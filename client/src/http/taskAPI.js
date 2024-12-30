import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createTask = async(task)=>{
    const {data} = await $authHost.post('task/create',task)
    return data
}
export const fetchTask = async(testId)=>{
    const {data} = await $authHost.get(`task/getAll/${testId}`)
    return data
}
export const updateTask = async(updateData)=>{
    const {data} = await $authHost.post(`task/update`,updateData)
    return data
}