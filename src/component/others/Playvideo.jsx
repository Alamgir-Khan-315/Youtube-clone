import React from 'react'

const Playvideo = () => {

    const videoData = JSON.parse(localStorage.getItem("videoData"))

    return (
        <div className='container mx-auto md:flex gap-2 lg:w-full'>
            <div className="video pb-2 md:w-full">

                <div className='img w-full h-[250px] bg-blue-200'>
                    <img className='w-full h-full' src="" alt="video" />
                </div>

                <div className="details my-2 p-1">
                    <h1 className='text-xl font-bold'>{videoData[1]}</h1>
                    <div className="subscribe">{videoData[2]} <span className='mx-2'> {videoData[3]}</span> <span className='font-bold'>...more</span></div>


                    <div className="yt-user flex justify-between items-center mt-3">
                        <div className="yt-prfile flex items-center">
                            <div className="profile-circle w-9 h-9 rounded-[50%] bg-blue-500"></div>
                            <div className="profile-name mx-2 font-bold">Coding with me</div>
                            <div className="profile-subscribe-no">74.6k</div>
                        </div>
                        <div className="yt-Subscribe bg-gray-100 p-1 px-2 rounded-2xl">
                            Subscribe
                        </div>
                    </div>


                    <div className="likw-row mt-3 flex gap-2">
                        <div className="like p-1 px-2 bg-gray-100 rounded-2xl">
                            like-icon 1.5k | dislike-icon
                        </div>
                        <sdiv className="share p-1 px-2 bg-gray-100 rounded-2xl">Sahre</sdiv>
                        <sdiv className="remix p-1 px-2 bg-gray-100 rounded-2xl">Remix</sdiv>
                        <sdiv className="download p-1 px-2 bg-gray-100 rounded-2xl">Download</sdiv>
                    </div>

                    <div className="comment my-3 mt-5 p-2 bg-gray-100 rounded-2xl">
                        <p><span className='font-bold'>Comments</span> 55</p>
                        <div className="comment-user flex gap-4 px-2 items-center">
                            <div className="photo h-8 w-8 bg-blue-500 rounded-2xl"></div>
                            <div className="comment text-justify">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aut dignissimos</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="ListVideo md:w-[40%]">
                <div className='img w-full h-[250px] bg-blue-200'>
                    <img className='w-full h-full' src="" alt="video" />
                </div>
                <div className="details my-2 p-1">
                    <h1 className='text-xl font-bold'>{videoData[1]}</h1>
                    <div className="subscribe">{videoData[2]} <span className='mx-2'> {videoData[3]}</span> <span className='font-bold'>...more</span></div>
                </div>

                <div className='img w-full h-[250px] bg-blue-200'>
                    <img className='w-full h-full' src="" alt="video" />
                </div>
                <div className="details my-2 p-1">
                    <h1 className='text-xl font-bold'>{videoData[1]}</h1>
                    <div className="subscribe">{videoData[2]} <span className='mx-2'> {videoData[3]}</span> <span className='font-bold'>...more</span></div>
                </div>
            </div>

        </div>
    )
}

export default Playvideo
