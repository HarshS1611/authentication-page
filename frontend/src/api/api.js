import axios from 'axios';


const API = axios.create({ baseURL: 'https://authentication-page-z1ze.onrender.com/' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`;
    }else{
        console.log("not logged in");
    }

    return req;
});

export const signIn = (userData) => API.post('/user/signin', userData);
export const signUp = (userData) => API.post('/user/signup', userData);