import React, {useEffect, useReducer} from 'react';
import AppRouter from "./routers/AppRouter";
import {authReducer} from "./auth/authReducer";
import {AuthContext} from "./auth/authContext";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || {logged: false};
}

const App = () => {

  const [user, userDispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{user, userDispatch}}>
      <AppRouter/>
    </AuthContext.Provider>
  );
};

export default App;