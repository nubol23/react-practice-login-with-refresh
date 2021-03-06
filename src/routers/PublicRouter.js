import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../auth/authContext";

const PublicRouter = ({children}) => {
  const {user} = useContext(AuthContext);

  return user.logged ? <Navigate to="/home"/> : children
};

export default PublicRouter;