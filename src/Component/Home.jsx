import React from 'react'
import Navbar from './Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Sidebar from './SideBarPage/Sidebar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Sidebar />} />
      </Routes>
    </div>
  )
}

export default Home