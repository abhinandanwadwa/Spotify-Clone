import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import './sidebar.css';

const Sidebar = () => {
  return (
    <>
        <div className="sidebar fixed left-0 bg-[#121212] text-white h-[80vh] p-5 w-[19%] rounded-lg mx-2">
            <div className="top-elements flex flex-col">
            <ul className='space-y-2'>
                <li className='list-item-flex flex cursor-pointer items-center flex-row space-x-5'>
                <svg role="img" height="24" width="24" class="Svg-ytk21e-0 jAKAlG collection-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                <span className='text-[13px] w-[100%] list-item-text'>Your Library</span>
                </li>
                <li className='mx-[-6px] list-item-flex flex cursor-pointer items-center flex-row space-x-3'>
                {/* <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG collection-icon"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg> */}
                <AiFillPlusSquare className='opacity-70 hover:opacity-100' size={40} />
                <span className='text-[13px] w-[100%] list-item-text'>Create Playlist</span>
                </li>
                <li className='mx-[-3px] list-item-flex flex cursor-pointer items-center flex-row space-x-4'>
                {/* <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG collection-icon"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg> */}
                {/* <AiFillPlusSquare className='opacity-70 hover:opacity-100' size={40} /> */}
                {/* <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG"><path style={{fill: 'white'}} d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg> */}
                <img src="https://community.spotify.com/t5/image/serverpage/image-id/104727iC92B541DB372FBC7/image-size/large?v=v2&px=999" alt="Liked" width={28} />
                <span className='text-[13px] w-[100%] list-item-text'>Liked Songs</span>
                </li>
            </ul>
            </div>
            <hr className='opacity-10 my-5' />
            <div className="playlist-section h-[75%] overflow-y-scroll">
                <ul className='space-y-3 flex flex-col'>
                    <li className='opacity-50 text-sm cursor-pointer w-[100%] hover:opacity-100 transition-all'>Bruh</li>
                    <li className='opacity-50 text-sm cursor-pointer w-[100%] hover:opacity-100 transition-all'>Share</li>
                    <li className='opacity-50 text-sm cursor-pointer w-[100%] hover:opacity-100 transition-all'>Entering a Parallel Dimension</li>
                    <li className='opacity-50 text-sm cursor-pointer w-[100%] hover:opacity-100 transition-all'>Trap Nation Top 100</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar