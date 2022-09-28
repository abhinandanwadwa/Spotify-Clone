import React from 'react'
import { useEffect } from 'react';
// import { HiOutlineHome } from 'react-icons/hi';
// import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './home.css'
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const Home = () => {
  const [greeting, setGreeting] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate('/login');
    }
    document.body.style.backgroundColor = 'black';

    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good morning');
    }
    else {
      setGreeting('Good evening');
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
      <div className="main-container p-6 flex flex-col rounded-lg w-[80%] text-white bg-[#121212]">
        <div className="heading flex justify-start text-3xl">{greeting}</div>
        <div className="cards flex flex-wrap w-[100%] my-5">
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
          <div className="card w-[31%] h-[35%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
            <div className="img"><img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" /></div>
            <div className="content p-6">Entering a Parallel Dimension</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home