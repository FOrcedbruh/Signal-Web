import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://signal-server-gu0d.onrender.com/',
    withCredentials: true
})