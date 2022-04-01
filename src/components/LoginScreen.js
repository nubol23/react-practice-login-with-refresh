import React from 'react';
import {useForm} from "../hooks/useForm";

const LoginScreen = () => {

  const [{email, password}, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") return;

    console.log(email)
    console.log(password)
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