import React, { useState } from 'react'
import { useEffect } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import './signup.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [cemail, setCemail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const backendApiURI = "http://localhost:8181/api";

    const navigate = useNavigate();
  

    useEffect(() => {
      if (localStorage.getItem('auth-token')) {
        navigate('/');
      }
    }, []);
    
  
    const register = async (e) => {
      e.preventDefault();
      if (email == cemail) {
        const response = await fetch(`${backendApiURI}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password, name })
        });
        const json = await response.json();
        if (json.authtoken) {
          localStorage.setItem('auth-token', json.authtoken);
          navigate('/');
        }
        else if (json.error) {
          alert(json.error);
          // console.log(json);
        }
        else if (json.errors) {
          alert(json.errors[0].msg);
        }
      }
      else {
        alert('Email and Confirm email should be same');
      }
    }
  
  return (
    <>
    <div className="header flex flex-col justify-center items-center py-5">
      <img style={{ filter: 'invert(1)', height: '40px' }} className='mt-3 mb-10' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
      <h2 className='text-3xl font-bold'>Sign up for free to start <br /><p className='flex justify-center'>listening.</p></h2>
    </div>


    <div className="content-wrapper p-4 flex flex-col justify-center items-center">
      <div className="content flex w-[100%] md:w-[33%] justify-center items-center flex-col">
        <button className='g-button p-[10px] w-[100%] font-sans flex justify-center items-center rounded-full border-gray-500 border-solid border-[1px] mb-4'><img className='mx-2' width={20} src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="GoogleIcon" />Continue With Google</button>
        <div className="hr-wrapper flex w-[100%]">
          <hr className='w-[50%] justify-start items-start' />
          <p className='my-[-9px]'>OR</p>
          <hr className='w-[50%] justify-end items-end' />
        </div>

        <div className="email-login py-3 flex flex-col justify-start items-start w-[100%]">
          <div className="input-wrapper flex flex-col w-[100%]">
            <label className='my-2 text-sm font-bold'>What's your email?</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email.' />
          </div>
          <div className="input-wrapper my-5 flex flex-col w-[100%]">
            <label className='my-2 text-sm font-bold'>Confirm your email</label>
            <input value={cemail} onChange={(e) => setCemail(e.target.value)} type="email" placeholder='Enter your email again.' />
          </div>
          <div className="input-wrapper flex flex-col w-[100%]">
            <label className='my-2 text-sm font-bold'>Create a password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Create a password.' />
          </div>
          <div className="input-wrapper my-4 flex flex-col w-[100%]">
            <label className='my-2 text-sm font-bold'>What should we call you?</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter a profile name.' />
            <small className='my-2'>This appears on your profile</small>
          </div>
          {/* <p className='my-4 forgot'>Forgot Your Password?</p> */}
          <div className="buttonwrapper flex flex-col items-center justify-center w-[100%]">
            <button onClick={register} className='login-button bg-[#1ed760] p-[13px] md:w-[28%] w-[100%] rounded-3xl'>Sign up</button>
            <p className='my-4'>Have an account? <Link className='text-[#36c066] login-link' to={'/login'}><a>Log in</a></Link>.</p>
          </div>
          {/* <hr className='w-[100%] my-6' /> */}
          {/* <p className='flex justify-center w-[100%] font-extrabold text-lg'>Don't have an account?</p> */}
          {/* <Link to={'/signup'} className='signup-button p-[10px] my-5 w-[100%] text-gray-500 font-bold font-sans flex justify-center items-center rounded-full border-gray-500 border-solid border-[1px] mb-4'><a>SIGN UP FOR SPOTIFY</a></Link> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup