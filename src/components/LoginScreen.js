import React, {useContext} from 'react';
import {useForm} from "../hooks/useForm";
import authApi from "../apis/authApi";
import jwtDecode from "jwt-decode";
import {AuthContext} from "../auth/authContext";
import {authTypes} from "../auth/authTypes";

const LoginScreen = () => {

  const {userDispatch} = useContext(AuthContext);

  const [{email, password}, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") return;

    console.log(email)
    console.log(password)

    authApi.post("users/token/", {
      email,
      password,
    })
      .then((response) => {

        const decoded = jwtDecode(response.data.access)
        const payload = {
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
          issuedAt: decoded.iat,
          expiresAt: decoded.exp,
          userId: decoded.user_id,
          firstName: decoded.first,
          email: decoded.email,
        }

        userDispatch({type: authTypes.login, payload})
      })
      .catch((error) => {
        console.log("Error al autenticar")
      })

  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;