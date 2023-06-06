import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createCatalog = async(catalog)=>{
    const {data} = await $authHost.post('api/catalog',catalog)
    return data
}
export const fetchCatalog = async(userId)=>{
    const {data} = await $authHost.get(`api/catalog/${userId}`)
    return data
}