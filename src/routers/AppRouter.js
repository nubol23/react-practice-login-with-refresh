import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from "../components/LoginScreen";
import DashboardRouter from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRouter>
            <LoginScreen/>
          </PublicRouter>
        }/>

        <Route path="/*" element={
          <PrivateRouter>
            <DashboardRouter/>
          </PrivateRouter>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;