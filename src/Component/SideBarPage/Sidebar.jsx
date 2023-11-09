import React, { useState } from 'react';
import './Sidebar.css';
import { ImYoutube } from 'react-icons/im';
import { AiFillHome } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink, Outlet } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mainSideBar">
        <div className="sideBar">
          <NavLink to="/card">
            <div className="logoContainer">
              <ImYoutube className="logoIcon" />
              <h1 className="iconName">YouTube</h1>
            </div>
          </NavLink>
          <div className="hambergerContainer" onClick={toggleSidebar}>
            <RxHamburgerMenu className="iconBarMenu" />
          </div>
          {isOpen ? (
            <ul className="nav">
              <li className="listItem">
                <AiFillHome className="iconBar" />
                Home
              </li>{' '}
              {/* Use icons from your chosen icon library */}
              <li className="listItem">
                <SiYoutubemusic className="iconBar" /> Trending
              </li>
              <li className="listItem">
                <MdSubscriptions className="iconBar" />
                Subs...
              </li>
              <li className="listItem">
                <TfiLayoutMediaLeftAlt className="iconBar" />
                You
              </li>
              {/* Add more items as needed */}
            </ul>
          ) : (
            <ul className="nav">
              <li>
                <AiFillHome className="iconBar" />
                Home
              </li>{' '}
              {/* Use icons from your chosen icon library */}
              <li>
                <SiYoutubemusic className="iconBar" /> Trending
              </li>
              <li>
                <MdSubscriptions className="iconBar" />
                Subscriptions
              </li>
              <li>
                <TfiLayoutMediaLeftAlt className="iconBar" />
                You
              </li>
            </ul>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Sidebar;
