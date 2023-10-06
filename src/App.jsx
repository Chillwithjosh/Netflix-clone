import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Account from './Pages/Account'

// control + spacbar at the end of Navbar to import directly
// 6 8 9

export default function App() {

  return (
    <>
    {/* <AuthContextProvider> */}
      <Navbar/>
      <Routes>
        <Route path='/Netflix-clone' element ={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    {/* </AuthContextProvider> */}
    </>
  )
}

