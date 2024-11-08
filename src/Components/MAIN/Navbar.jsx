import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <>
    
    <div className=' h-16 w-screen bg-gray-300 items-center justify-around flex '>
       <div className='w-1/3'>
           <a href="/">SNAP</a>
       </div>
       <div className=' justify-between gap-10 flex'>
           <Link to='/certifications' >Certifications</Link>
           <Link to='/jobbootcsmp' >JobBootcamp</Link>
           <Link to='/techversity' >Techversity</Link>
           <Link to='/login' >Login</Link>

       </div>
    </div>
    
    </>
  );
};

export default Navbar;
