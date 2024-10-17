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

const l_menu = () => {

    const [Lmenu, setLmenu] = useState()

    useEffect(() => {
        const GetMenuData = () => {
            setLmenu(localStorage.getItem("Menu"))
        }
        GetMenuData(); // Initial fetch
        const interval = setInterval(GetMenuData, 1); // Refresh
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="menu w-full pr-4 mr-5">

                {Lmenu === "false" ?
                    <div className="lg flex flex-col ml-5 transition-all">
                        <div className="home mt-5 flex flex-col gap-5">
                            {Lhome.map(h => {
                                return <div className='p-1 px-4 rounded-lg hover:bg-gray-200'>
                                    {h.name === "Home" ? <Link to="/">{h.name}</Link> : h.name}</div>
                            }
                            )}
                        </div>
                        <hr className='mt-3 border -ml-8' />
                        <div className="home mt-5 flex flex-col gap-5">
                            {Lchannel.map(h => { return <div className='p-1 px-4 rounded-lg hover:bg-gray-200'>{h.name}</div> })}
                        </div>
                        <hr className='mt-3 border -ml-8' />
                    </div>
                    :
                    <div className="transition-all">
                        <div className="home mt-5 flex flex-col gap-5 ">
                            {Mhome.map(h => {
                                return <div className='p-2 px-1 rounded-lg flex flex-col items-center gap-3 hover:bg-gray-200'>
                                    {h.name === "Home" && <><Link to="/">< IoMdHome className='text-xl mb-2 mx-1' /> <p className='text-xs -mt-2'>{h.name}</p></Link> </>}
                                    {h.name === "Short" && <>< SiYoutubeshorts className='text-xl' /> <p className='text-xs -mt-2'> {h.name}</p> </>}
                                    {h.name === "Subscription" && <>< MdOutlineSubscriptions className='text-xl' /> <p className='text-xs -mt-2'> {h.name}</p></>}
                                    {h.name === "You" && <>< GoVideo className='text-xl' /> <p className='text-xs -mt-2'> {h.name} </p> </>}
                                </div>
                            })}
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default l_menu
