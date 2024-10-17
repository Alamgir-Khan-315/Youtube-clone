import React, { useState } from 'react'
import Icon from '../../../public/download.png'

// icon
import { GrMenu, GrNotification } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";

const nav = () => {

    const [Menu, setMenu] = useState(false)
    const MenuLocalStorage = (Menu) => {
        setMenu(!Menu)
        localStorage.setItem("Menu", Menu)
    }

    return (
        <div className='border-b-2 border-gray-200 '>
            <div className='flex justify-between items-center p-3'>

                <div className="logo flex items-center gap-2">
                    {Menu === true ? <div className="menu bg-gray-200 p-2 text-xl rounded-[20px]" onClick={() => { MenuLocalStorage(Menu) }}><GrMenu /></div> : <div className="menu hover:bg-gray-200 p-2 text-xl rounded-[20px]" onClick={() => { MenuLocalStorage(Menu) }}><GrMenu /></div>}
                    <img src={Icon} className='w-7 ml-3' alt="img" />
                    <h1 className='font-extrabold text-2xl md:text-xl'>YouTube</h1>
                </div>

                <div className="mobile-icon flex gap-4 md:hidden">
                    <div className="cast text-xl"><GoDeviceCameraVideo /></div>
                    <div className="cast text-xl">< GrNotification /></div>
                    <div className="cast text-xl"><CiSearch /></div>
                </div>

                <div className="search w-[40%] hidden items-center relative gap-5 md:flex">
                    <input className='border w-full border-gray-400 p-2 px-3 rounded-[20px]' type="text" placeholder='search' />
                    <button className='right-[50px] border border-gray-400 bg-gray-200 h-full rounded-r-[20px] absolute p-2'><CiSearch /></button>
                    <div className="mike border border-gray-400 bg-gray-200 rounded-[20px] p-2"><FaMicrophone /></div>
                </div>

                <div className="icons hidden gap-5 md:flex items-center">
                    <div className="1 text-xl"><GoDeviceCameraVideo /></div>
                    <div className="1 text-xl">< GrNotification /></div>
                    <div className="1 p-1 px-3 bg-green-600 text-white rounded-[50%]">A</div>
                </div>
            </div>
        </div>
    )
}

export default nav
