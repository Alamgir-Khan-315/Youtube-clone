import React from 'react'
import Data from './Data/data.json'

// icons
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

const Playvideo = () => {

    const videoData = JSON.parse(localStorage.getItem("videoData"))

    return (
        <div className='container mx-auto md:flex gap-2 lg:w-full'>
            <div className="video pb-2 md:w-full">

                <div className='img w-full bg-blue-200 md:rounded-2xl    md:h-[35%]'>
                    <img className='w-full  h-[200px]' src="" alt="video" />
                </div>

                <div className="details my-2 p-1">
                    <div className="video-time      md:hidden">
                        <h1 className='text-xl font-bold'>{videoData[1]}</h1>
                        <div className="subscribe">{videoData[2]} <span className='mx-2'> {videoData[3]}</span> <span className='font-bold'>...more</span></div>
                    </div>

                    <div className="yt-sub-grp-md-flex md:flex md:justify-between">
                        <div className="yt-user flex justify-between items-center mt-3">
                            <div className="yt-prfile flex items-center">
                                <div className="profile-circle w-9 h-9 rounded-[50%] bg-blue-500"></div>
                                <div className="profile-name mx-2 font-bold">Coding with me</div>
                                <div className="profile-subscribe-no">74.6k</div>
                            </div>
                            <div className="yt-Subscribe bg-black text-white font-bold ml-8 p-1 px-2 rounded-2xl">
                                Subscribe
                            </div>
                        </div>


                        <div className="likw-row mt-3 flex gap-2">
                            <div className="like flex items-center gap-1 p-1 px-2 bg-gray-100 rounded-2xl">
                                <AiOutlineLike /> 1.5k | <BiDislike className='ml-2' />
                            </div>
                            <sdiv className="share flex items-center gap-1 p-1 px-2 bg-gray-100 rounded-2xl"><IoShareSocialOutline /> Share</sdiv>
                            <sdiv className="download flex items-center gap-1 p-1 px-2 bg-gray-100 rounded-2xl"><HiDownload /> Download</sdiv>
                            <sdiv className="more flex items-center gap-1 p-1 px-2 bg-gray-100 rounded-2xl"><IoIosMore /></sdiv>
                        </div>

                    </div>
                    <div className="comment my-3 mt-5 p-2 bg-gray-100 rounded-2xl">
                        <p><span className='font-bold'>Comments</span> 55</p>
                        <div className="comment-user flex gap-4 px-2 items-center">
                            <div className="photo h-8 w-8 bg-blue-500 rounded-2xl"></div>
                            <div className="comment text-justify flex md:w-[80%] md:mx-auto">Lorem ipsum dolor sit amet consectetur <br className='md:hidden' /> adipisicing elit. Aut dignissimos <span className='hidden md:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti aspernatur incidunt facilis est eligendi quis ab culpa itaque vel? Dolore impedit repudiandae autem sit eum earum est cum possimus?</span> </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="ListVideo md:w-[40%]">
                {Data.map(d => {
                    return <div className="related-video md:h-[110px] md:flex md:my-4">
                        <div className='img h-[180px] md:h-[110px] md:w-[15rem] md:rounded-2xl bg-blue-200'>
                            <img className='w-full h-full' src="" alt="video" />
                        </div>
                        <div className="details my-2 p-1        md:flex-col">
                            <h1 className='text-xl font-bold'>{d.title}</h1>
                            <div className="subscribe  my-1 mb-3">{d.time} <span className='mx-2'> {videoData[3]}</span> <span className='font-bold md:hidden'>...more</span></div>
                        </div>
                        <div className="menu hidden md:flex mt-7"><CiMenuKebab /></div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Playvideo
