import axios from "axios";

const API_URL = "http://127.0.0.1:8000/"

const onRequest = (config) => {
  const user = JSON.parse(localStorage.getItem('user'))
  config.headers["Authorization"] = `Bearer ${user.accessToken}`;

  return config;
}

const onRequestError = (error) => {
  return Promise.reject(error);
}

const onResponse = (response) => {
  return response
}

const onResponseError = async (error) => {

  if (error.response) {
    // Access Token was expired
    if (
      error.response.status === 401
      // && error.response.detail === "Given token not valid for any token type"
    ) {
      let user = JSON.parse(localStorage.getItem("user"));

      try {
        console.log("REFRESHED TOKEN");
        
        // Update access token
        const response = await axios.post(`${API_URL}users/token/refresh/`, {
          refresh: user.refreshToken,
        });

        user.accessToken = response.data.access;
        localStorage.setItem("user", JSON.stringify(user));
      } catch (_error) {
        // Can't refresh token
        return Promise.reject(_error)
      }
    }
  }

  return Promise.reject(error);
};

export const setUpInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}