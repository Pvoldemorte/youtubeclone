import React from 'react'
import { Link } from "react-router-dom";
import {IoIosNotificationsOutline} from "react-icons/io"
import {BiVideoPlus} from "react-icons/bi"
import { IoLogoYoutube } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logoName"><IoLogoYoutube className='youtubeLogo' /><span>Youtube</span></div>
        <div className='navSearchbarwithicon'>
        <input type='search' className='navSearchbar' placeholder='search'/>
        <GrSearch className='searchLogo'/>
        <MdKeyboardVoice className='voiceLogo' />
        </div>
        <div>
          <BiVideoPlus className='videoLogo'/>
          <IoIosNotificationsOutline className='notificationLogo'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar