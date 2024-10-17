import React, { useState } from 'react'
import Data from './Data/data.json'
import { Link } from 'react-router-dom'

const mob_video = () => {

    const [video, setvideo] = useState(localStorage.getItem("video"))

    const VIdeoToLocal = (id, title, views, time) => {
        const videoData = [id, title, views, time]
        localStorage.setItem("videoData", JSON.stringify(videoData))

        setvideo(!video)
        localStorage.setItem("video", video)
    }

    return (
        <div className='h-full'>
            <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {Data.map(d => {
                    return <div onClick={() => { VIdeoToLocal(d.id, d.title, d.views, d.time) }}>
                        <Link to="/video">
                            <div className="cards rounded-lg shadow-lg">
                                <div className="img w-full rounded-t-lg bg-blue-300 h-[200px] md:h-52">
                                    <img src="" alt={d.thumbnail} />
                                </div>

                                <div className="details relative px-3 py-3 flex gap-5 items-center    md:px-3 md:py-1 md:gap-8">
                                    <div className="logo w-12 h-12 bg-black rounded-[50%]">
                                        <img src="" alt={d.Logo} />
                                    </div>

                                    <div className="yt-title">
                                        <h1 className='font-bold'>{d.title}</h1>
                                        <div className="ytinfo flex md:flex-col text-sm md:text-xs">
                                            <h1 >{d.ytname}</h1>
                                            <p >{d.views} . {d.time}</p>
                                        </div>
                                    </div>

                                    <div className="menu absolute right-5 flex md:hidden">
                                        menu
                                    </div>


                                </div>
                            </div>
                        </ Link>

                    </div>
                })}
            </div>
        </div >
    )
}

export default mob_video
