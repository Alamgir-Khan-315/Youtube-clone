import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Lhome from './Data/L_menu_home.json'
import Lchannel from './Data/L_menu_yourChannel.json'
import Mhome from './Data/M_menu.json'

// Hide icons
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoVideo } from "react-icons/go";

const S_menu = () => {

    const [Lmenu, setLmenu] = useState()

    useEffect(() => {
        const GetMenuData = () => {
            setLmenu(localStorage.getItem("Menu"))
        }
        GetMenuData(); // Initial fetch
        const interval = setInterval(GetMenuData, 1); // Refresh
        return () => clearInterval(interval);
    }, []);

    const setLmenuBlack = () => { setLmenu("true") }

    return (
        <div onClick={setLmenuBlack} className='w-screen absolute bg-[#000000b4]'>

            <div className="menu bg-white h-full w-[30%] pr-4 mr-5">

                {Lmenu === "false" ?
                    <div className="lg flex flex-col ml-5 transition-all">
                        <div className="home mt-5 flex flex-col gap-5">
                            {Lhome.map(h => { return <div className='p-1 px-4 rounded-lg hover:bg-gray-200'>{h.name === "Home" ? <Link to="/">{h.name}</Link> : h.name}</div> })}
                        </div>
                        <hr className='mt-3 border -ml-8' />
                        <div className="home mt-5 flex flex-col gap-5">
                            {Lchannel.map(h => { return <div className='p-1 px-4 rounded-lg hover:bg-gray-200'>{h.name}</div> })}
                        </div>
                        <hr className='mt-3 border -ml-8' />
                    </div>
                    :
                    <></>
                }

            </div>

        </div>
    )
}

export default S_menu
