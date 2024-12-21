import axios from "axios";

export const Fetchdata = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
})