import React from 'react'
import Nav from './others/nav'
import L_menu from './others/l_menu'
import S_menu from './others/S_menu'
import Suggession from './others/suggession'
import PlayVideo from './others/Playvideo'

const Video = () => {
    return (
        <div>
            <Nav />
            <div className="mbl md:hidden relative">
                <div className='z-10 absolute'><S_menu /> </div>
                <div className='z-1'><PlayVideo /> </div>
            </div>

            <div className="Main hidden mt-3 md:flex gap-2">
                <div className="l_menu">
                    <L_menu />
                </div>
                <div className="main w-screen px-1">
                    <Suggession />
                    <PlayVideo />
                </div>
            </div>
        </div>
    )
}

export default Video
