import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Email"
          name="email"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;