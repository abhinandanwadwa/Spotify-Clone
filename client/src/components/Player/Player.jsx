import React from 'react';
import './player.css';

const Player = () => {
  return (
    <>
    <div className="container-wrapper flex w-[100%] justify-center bg-black">
        <div className="container flex justify-between text-white w-[100%] items-center">
            <div className="left">
                <div className="l1"></div>
                <div className="l2"></div>
                <div className="l3"></div>
            </div>
            <div className="middle">Hi2</div>
            <div className="right">Hi3</div>
        </div>
    </div>
    </>
  )
}

export default Player