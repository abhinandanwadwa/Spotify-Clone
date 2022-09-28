import React from 'react'
import { useEffect } from 'react';
// import { HiOutlineHome } from 'react-icons/hi';
// import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './home.css'
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor'

const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [count, setCount] = useState([1, 2, 3]);
  const [colors, setColors] = useState([]);

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


  function getColors(colorSwatch) {
    setColors([...colors, colorSwatch]);
  }



  const cardHover = (index) => {
    // const mainContainer = document.getElementById('main-container');
    // mainContainer.style.backgroundColor = colors[2] + '7d';
  }


  console.log(colors);


  return (
    <>
    <Navbar />
    <div className="content-wrapper justify-between flex flex-row w-[100vw]">
      <div>
        <Sidebar />
      </div>
      <div id='main-container' className="main-container p-6 flex flex-col rounded-lg w-[80%] text-white bg-[#121212]">
        <div className="heading flex justify-start text-3xl">{greeting}</div>
        <div className="cards flex flex-wrap w-[100%] my-5">
          {count.map((count) => {
            return (
              <div key={count} className="card cursor-pointer w-[31%] h-[39%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
                <div className="img" onMouseEnter={() => cardHover(count)}>
                  <ColorExtractor getColors={getColors}>
                    <img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" />
                  </ColorExtractor>
                </div>
                <div className="content p-6">Entering a Parallel Dimension</div>
              </div>
            );
          })}

          {count.map((count) => {
            return (
              <div key={count} className="card cursor-pointer w-[31%] h-[39%] flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
                <div className="img" onMouseEnter={() => cardHover(count)}>
                  <ColorExtractor getColors={getColors}>
                    <img width={100} className='main-img h-20 object-cover' src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="cover-image" />
                  </ColorExtractor>
                </div>
                <div className="content p-6">Liked Songs</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home