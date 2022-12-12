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
import Player from '../Player/Player';
import extractSingleColor from 'image-color-extractor';
import hexRgb from 'hex-rgb';

const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [colors, setColors] = useState({});


  const getMyPlaylists = async () => {
    const authtoken = localStorage.getItem('auth-token');
    const response = await fetch('http://localhost:8181/api/playlist/getmyplaylists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authtoken
      }
    });
    const json = await response.json();
    setPlaylists(json);
  }


  useEffect(() => {
    // setPlaylists(playlists.slice(0, 6));
    if (playlists.length > 0) {
      
      let colorsArray = {};

      playlists.forEach(playlist => {
        const index = playlists.map(object => object.name).indexOf(playlist.name);
        console.log(index);

        extractSingleColor(playlist.image.url)
          .then(thisColor => colorsArray[index] = thisColor)
          .catch(error => console.error(error))
          console.log(colorsArray);
          setColors(colorsArray);
        // setColors([...colors, findColor(playlist.image.url)]);
      });

    }
  }, [playlists]);


  useEffect(() => {
    console.log(colors);
  }, [colors]);
  



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
    getMyPlaylists();
    // eslint-disable-next-line
  }, []);



  const cardHover = (index) => {
    const mainContainer = document.getElementById('main-container');
    // const rgbFormat = hexRgb(colors[index], {format: 'css'});
    // console.log(rgbFormat);
    // mainContainer.style.backgroundImage = `linear-gradient(to bottom, ${rgbFormat} 0%, rgb(18, 18, 18) 100%)`;
    // console.log(colors.index);
    console.log(colors);
    mainContainer.style.backgroundColor = colors[index];



    // background-image: linear-gradient(#1e1e1e, #121212);
    // console.log(colors[index]);
  }


  return (
    <>
    <Navbar />
    <div className="content-wrapper justify-between flex flex-row w-[100vw]">
      <div>
        <Sidebar />
      </div>
      <div id='main-container' className="main-container transition-all p-6 flex flex-col rounded-lg w-[80%] text-white bg-[#121212]">
        <div className="heading flex justify-start text-3xl">{greeting}</div>
        <div className="cards flex flex-wrap w-[100%] my-5">
          {/* {playlists.map((count) => {
            return (
              <div key={count} onMouseEnter={() => cardHover(count)} className="card cursor-pointer w-[31%] h-20 flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
                <div className="img">
                  <ColorExtractor getColors={getColors}>
                    <img width={100} className='main-img h-20 object-cover' src="https://i.scdn.co/image/ab67706c0000da8459ab0b93f847fab7c6f9e1d8" alt="cover-image" />
                  </ColorExtractor>
                </div>
                <div className="content p-6">Entering a Parallel Dimension</div>
              </div>
            );
          })} */}

          {playlists.map((playlist, index) => {
            return (
              <div key={playlist._id} onMouseEnter={() => cardHover(index)} className="card cursor-pointer w-[31%] h-20 flex flex-row items-center bg-[#ffffff38] rounded-md m-2">
                <div className="img" onMouseEnter={() => cardHover(index)}>
                    <img width={100} className='main-img h-20 object-cover' src={playlist.image.url} alt="cover-image" />
                </div>
                <div className="content p-6">{playlist.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Player />
    </>
  )
}

export default Home