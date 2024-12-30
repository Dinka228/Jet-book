import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createResultStudent = async(resultStudent)=>{
    const {data} = await $authHost.post('resultStudent/create',resultStudent)
    return data
}
export const fetchResultStudent = async(userId)=>{
    const {data} = await $authHost.get(`resultStudent/getAllStudentResult/${userId}`)
    return data
}
export const fetchResultTeacher = async(userId)=>{
    const {data} = await $authHost.get(`resultStudent/getAllTeacherResult/${userId}`)
    return data
}
export const fetchTestResult = async(testId)=>{
    const {data} = await $authHost.get(`resultStudent/getAllTestResult/${testId}`)
    return data
}