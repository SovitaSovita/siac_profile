import axios from "axios";
// export const BASE_URL = `http://localhost:8080/api/v1`;
// export const BASE_URL1 = `http://localhost:8080`;
// export const BASE_URL2 = `http://8.219.142.113:3000`;
// export const BASE_URL_IMAGE = `http://localhost:8080/api/v1/images?fileName=`;
export const BASE_URL = `https://digital-asset-api.yasokhen.info/api/v1`;
export const BASE_URL1 = `https://digital-asset-api.yasokhen.info`;
export const BASE_URL2 = `http://8.219.142.113:3000`;
export const BASE_URL_IMAGE = `https://digital-asset-api.yasokhen.info/api/v1/images?fileName=`;
export const BASE_URL_FILE = `https://digital-asset-api.yasokhen.info/api/v1/files?fileName=`;


let TOKEN;
// Check if running on the client-side (browser)
if (typeof window !== 'undefined') {
    TOKEN = localStorage.getItem('Token');
}

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('Token') : null}`,
        "Content-type": "application/json;charset=utf-8",
    },
});

API.interceptors.request.use((s) => {
    s.headers.Authorization = `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('Token') : null}`
    return s
})


API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/"
            localStorage.removeItem("Token")
        }
        return Promise.reject(error);
    }
);

export { API };

export const Auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json;charset=utf-8",
    },
});



export const APIImage = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('Token') : null}`,
        "Content-Type": "multipart/form-data",
    },
});


export const API_BLOB = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('Token') : null}`,
        "Content-type": "application/json;charset=utf-8",
    },
    responseType: 'blob',
});
