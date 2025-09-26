import React from 'react'
import { useToken } from '../../hooks/movie/useToken';


const Header = () => {
  const { logout } = useToken();
  return (
    <div style={{backgroundColor:"#0A1128", fontSize:"20px"}} className={`fixed top-0 left-0 w-full font-poppins`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center h-16 sm:h-20'>
          <a href="#" className=' text-amber-50'>Home</a>
          <a href="#" className=' text-amber-50 p-4'>Categories</a>
          <a href="#" className=' text-amber-50'>Account</a>
          <button onClick={logout} className='cursor-pointer p-4 text-amber-50'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header