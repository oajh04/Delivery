import axios, { AxiosError } from 'axios'

const instance = axios.create({
    baseURL: 'https://apis.tracker.delivery',
    timeout: 10000
});
instance.interceptors.request.use(
    function (config) {
        return config;
    }, 
    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
export default instance;