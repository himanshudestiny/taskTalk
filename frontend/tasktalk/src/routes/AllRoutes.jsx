import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default AllRoutes
