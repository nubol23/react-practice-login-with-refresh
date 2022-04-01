import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from "../components/LoginScreen";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}/>

        <Route path="/*" element={<DashboardRouter/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;