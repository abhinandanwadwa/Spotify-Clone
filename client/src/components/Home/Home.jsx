import React from 'react'
import { useEffect } from 'react';
// import { HiOutlineHome } from 'react-icons/hi';
// import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './home.css'
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
    <Navbar />
    <div className="content-wrapper justify-between flex flex-row w-[100vw]">
      <div>
        <Sidebar />
      </div>
      <div className="main-container text-white bg-[#121212]">
        
      </div>
    </div>
    </>
  )
}

export default Home