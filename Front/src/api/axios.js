import axios from "axios";

const instance = axios.create({
    /* baseURL: 'http://localhost:3090/api', */
    baseURL: 'https://magyprintbd.onrender.com/api',
    withCredentials: true
})



export default instance