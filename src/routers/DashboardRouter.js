import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomeScreen from "../components/HomeScreen";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen/>}/>
      <Route path="/*" element={<Navigate to="/home"/>}/>
    </Routes>
  );
};

export default DashboardRouter;