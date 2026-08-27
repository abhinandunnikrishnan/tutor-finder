import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Tutors from './pages/Tutors'
import TutorDetails from './pages/TutorDetails'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Pnf from './pages/Pnf'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/tutors' element={<Tutors/>}/>
        <Route path='/tutors/:id' element={<TutorDetails/>}/>
        <Route path='/booking/:tutorId' element={<Booking/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <ToastContainer position='top-center' autoClose={2000} theme='colored'/>
    </>
  )
}

export default App
