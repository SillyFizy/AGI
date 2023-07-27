import axios from "axios";
import router from "@/main.js";

const instance = axios.create({
    baseURL: "http://localhost:3000",
})

instance.interceptors.request.use((request ) => {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
    return request;
}, error => {
    return Promise.reject(error);
})
instance.interceptors.response.use((response)=>{
    return response;
}, error => {
    if(error.response.status === 401){
        router.push({name: 'SignIn'})
    }
    return Promise.reject(error);
})
export default instance;