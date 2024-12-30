import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createCatalog = async(catalog)=>{
    const {data} = await $authHost.post('catalog/create',catalog)
    return data
}
export const fetchCatalog = async(userId)=>{
    const {data} = await $authHost.get(`catalog/getAll/${userId}`)
    return data
}
export const deleteCatalog = async(catalogId)=>{
    const {data} = await $authHost.post(`catalog/delete/${catalogId}`)
    return data
}