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
              .catch((error) => error))
          }

          reject(error);
        })
    });
  }
}

const api = new Api();

export default api;