import axios from 'axios'

const $host = axios.create({
    baseURL:'http://localhost/server2/',
    withCredentials: true
})
const $authHost = axios.create({
    baseURL:'http://localhost/server2/',
    withCredentials: true
})
export{
    $host,
    $authHost
}
// const authInterceptor = config=>{
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }

// $host.interceptors.request.use(authInterceptor)
