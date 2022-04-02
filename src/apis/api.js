// const api = setUpInterceptorsTo(
//   axios.create({
//     baseURL: "http://127.0.0.1:8000/",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// );

import {setUpInterceptorsTo} from "./interceptors";
import axios from "axios";

class Api {
  constructor() {
    this.axiosInstance = setUpInterceptorsTo(
      axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  }

  get(path) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.get(path)
        .then((response) => {
          if (response) resolve(response);
          reject();
        })
        .catch((error) => {
          // Retry request if returned 401 as the token was refreshed
          if (error.response.status === 401) {
            resolve(this.axiosInstance.get(path)
              .then((response) => response)
              .catch((error) => {
                localStorage.setItem("user", JSON.stringify({logged: false}))
                return error
              }))
          }

          reject(error);
        })
    });
  }

  post(path) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.post(path)
        .then((response) => {
          if (response) resolve(response);
          reject();
        })
        .catch((error) => {
          // Retry request if returned 401 as the token was refreshed
          if (error.response.status === 401) {
            resolve(this.axiosInstance.post(path)
              .then((response) => response)
              .catch((error) => {
                localStorage.setItem("user", JSON.stringify({logged: false}))
                return error
              }))
          }

          reject(error);
        })
    });
  }

  put(path) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.put(path)
        .then((response) => {
          if (response) resolve(response);
          reject();
        })
        .catch((error) => {
          // Retry request if returned 401 as the token was refreshed
          if (error.response.status === 401) {
            resolve(this.axiosInstance.put(path)
              .then((response) => response)
              .catch((error) => {
                localStorage.setItem("user", JSON.stringify({logged: false}))
                return error
              }))
          }

          reject(error);
        })
    });
  }

  patch(path) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.patch(path)
        .then((response) => {
          if (response) resolve(response);
          reject();
        })
        .catch((error) => {
          // Retry request if returned 401 as the token was refreshed
          if (error.response.status === 401) {
            resolve(this.axiosInstance.patch(path)
              .then((response) => response)
              .catch((error) => {
                localStorage.setItem("user", JSON.stringify({logged: false}))
                return error
              }))
          }

          reject(error);
        })
    });
  }

  delete(path) {
    return new Promise((resolve, reject) => {
      this.axiosInstance.delete(path)
        .then((response) => {
          if (response) resolve(response);
          reject();
        })
        .catch((error) => {
          // Retry request if returned 401 as the token was refreshed
          if (error.response.status === 401) {
            resolve(this.axiosInstance.delete(path)
              .then((response) => response)
              .catch((error) => {
                localStorage.setItem("user", JSON.stringify({logged: false}))
                return error
              }))
          }

          reject(error);
        })
    });
  }
}

const api = new Api();

export default api;