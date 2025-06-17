import axios from 'axios';
//import { getToken } from '../utils/auth';
import { saveToken, getToken, removeToken } from '../utils/auth';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (resposta) => resposta,
  (erro) => {
      if(erro.response.status === 401){
          localStorage.removeItem("token");
          window.location.href = "//login";
      }
      return Promise.reject(erro);
  }
);


export default api;