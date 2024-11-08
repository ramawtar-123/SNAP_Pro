import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/MAIN/Home';
import Navbar from './Components/MAIN/Navbar';
import Certifications from './Components/NavComponents/Certifications';
import Techversity from './Components/NavComponents/Techversity';
import JobBootcamp from './Components/NavComponents/JobBootcamp';
import Login from './Components/NavComponents/Login';
import SignUp from './Components/NavComponents/SignUp';
import Userdashboard from './Components/Dashboard/Userdashboard';
import { getLocalStorage, setLocalStorage } from './Components/Storages/LocalStorage';


function App() {
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, )
  
  return (
    <div>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/techversity' element={<Techversity />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/jobbootcamp' element={<JobBootcamp />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/userdashboard' element={<Userdashboard/>} />
      
      </Routes>
      

    </div>
  );
}

export default App;
