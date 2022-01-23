import React from 'react'
import DashBoard from './components/DashBoard'
import DashBoardRoomDetails from './components/DashBoardRoomDetails'
import DashBoardRoomChange from './components/DashBoardRoomChange'
import LandingPage from './components/LandingPage'
import LandingPageAdmin from './components/LandingPageAdmin'
import AdminDB from './components/AdminDB'
import AdminDBnew from './components/AdminDBnew'
import AddHostel from './components/AddHostel'
import {
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<LandingPageAdmin/>} />
          <Route path="/user/dashboard/home" element={<DashBoard/>} />
          <Route path="/user/dashboard/room/details" element={<DashBoardRoomDetails/>} />
          <Route path="/user/dashboard/room/change" element={<DashBoardRoomChange/>} />
          <Route path="/admin/dashboard" element={<AdminDB/>} />
          <Route path="/admin/dashboard/new-admin" element={<AdminDBnew/>} />
          <Route path="/admin/dashboard/hostel/add" element={<AddHostel/>} />
        </Routes>
      {/* <LandingPage/> */}
      {/* <LandingPageAdmin/> */}
      {/* <DashBoard/> */}
      {/* <DashBoardRoomDetails/> */}
      {/* <DashBoardRoomChange/> */}
      {/* <AdminDB/> */}
      {/* <AdminDBnew/> */}
      {/* <AddHostel/> */}
    </div>
  )
}

export default App
