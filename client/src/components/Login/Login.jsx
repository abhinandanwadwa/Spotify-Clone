import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const backendApiURI = "http://localhost:8181/api";

  const navigate = useNavigate();



  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);


  const login = async (e) => {
    e.preventDefault();
    const respose = await fetch(`${backendApiURI}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const json = await respose.json();
    if (json.authtoken) {
      localStorage.setItem('auth-token', json.authtoken);
      navigate('/');
    }
    else {
      alert('Incorrect Credentials!');
    }
  }

  return (
    <>
    <div className="header flex justify-center items-center py-7">
      <img style={{ filter: 'invert(1)', height: '58px' }} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
    </div>

    <hr className='text-black font-bold' />

    <div className="content-wrapper p-4 flex flex-col justify-center items-center">
      <div className="content flex md:w-[33%] w-[100%] justify-center items-center flex-col">
        <button className='p-[10px] w-[100%] font-sans flex justify-center items-center rounded-full border-gray-500 border-solid border-[1px] mb-4'><img className='mx-2' width={20} src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="GoogleIcon" />Continue With Google</button>
        <div className="hr-wrapper flex w-[100%]">
          <hr className='w-[50%] justify-start items-start' />
          <p className='my-[-9px]'>OR</p>
          <hr className='w-[50%] justify-end items-end' />
        </div>

        <div className="email-login py-3 flex flex-col justify-start items-start w-[100%]">
          <div className="input-wrapper my-5 flex flex-col w-[100%]">
            <label className='my-2 font-bold'>Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email address' />
          </div>
          <div className="input-wrapper flex flex-col w-[100%]">
            <label className='my-2 font-bold'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
          </div>
          <p className='my-4 forgot'>Forgot Your Password?</p>
          <div className="buttonwrapper flex justify-end w-[100%]">
            <button onClick={login} className='login-button bg-[#1ed760] p-[13px] md:w-[28%] w-[100%] rounded-3xl'>LOG IN</button>
          </div>
          <hr className='w-[100%] my-6' />
          <p className='flex justify-center w-[100%] font-extrabold text-lg'>Don't have an account?</p>
          <Link to={'/signup'} className='signup-button p-[10px] my-5 w-[100%] text-gray-500 font-bold font-sans flex justify-center items-center rounded-full border-gray-500 border-solid border-[1px] mb-4'><a href='/signup'>SIGN UP FOR SPOTIFY</a></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login