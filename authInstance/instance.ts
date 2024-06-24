import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://signal-nine.vercel.app/',
    withCredentials: true
})
