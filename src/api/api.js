import axios from "axios";

export const ACCESS_TOKEN = "access_token";


const axiosInstance = axios.create({
  baseURL: "http://yourhomefitness.ru/api/",
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(ACCESS_TOKEN);

//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {

    return Promise.reject(error);
  }
);

export default axiosInstance;
