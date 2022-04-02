import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../auth/authContext";
import {authTypes} from "../auth/authTypes";

const HomeScreen = () => {

  const navigate = useNavigate();

  const {user, userDispatch} = useContext(AuthContext);

  const handleLogout = () => {
    userDispatch({type: authTypes.logout});

    navigate("/login", {replace: true});
  }

  return (
    <>
      <div>
        Home Screen
      </div>
      <br/>
      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default HomeScreen;