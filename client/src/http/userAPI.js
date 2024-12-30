import {$authHost,$host} from "./index";

export const registration = async(email,password,fullName,speciality,group,department)=>{
    const {data} = await $host.post('user/registration',{email,password,fullName,speciality,group,department})
    localStorage.setItem('id',data.id)
    return data
}
export const login = async(email,password)=>{
    const {data} = await $host.post('user/login',{email,password})
    console.log(data)
    localStorage.setItem('id',data.id)
    return data
}
export const check = async()=>{
    const {data} = await $host.post('user/check')

    localStorage.setItem('id',data.id)
    return data
}
export const fetchAllStudents = async()=>{
    const {data} = await $host.get('user/getAllStudents')
    return data
}
export const fetchAllTeachers = async()=>{
    const {data} = await $host.get('user/getAllTeachers')
    return data
}