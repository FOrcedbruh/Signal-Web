import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://signal-server-7mra.onrender.com/',
    withCredentials: true
})
