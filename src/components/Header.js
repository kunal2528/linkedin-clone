/*disable eslint jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { Avatar } from '@mui/material';

function Header() {
  
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  const user = useSelector(selectUser);

  return (
    <div className='header'>
      <div className="header_left">
        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" alt="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <div className="dropdown">
          <HeaderOption avatar menu title='Me' />
          <div className="dropdown-content">
            <div className='dropdown_content_header'>
              <Avatar className='avatar' src={user?.photoURL}>{user?.email[0].toUpperCase()}</Avatar>
              <div className='avatar_info'>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
              </div>
            </div>
            <button>View Profile</button>
            <hr className='line' />
            <p className='topic'>Account</p>
            {/* eslint-disable */}
            <a className='premium_icon' style={{fontSize: '14px', color: 'gray', fontWeight: '400', textDecoration: 'none'}}><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LIlogo.jpg" alt="premium" />Try Premium for free</a>
            <a href="#">Settings & Privacy</a>
            <a href="#">Help</a>
            <a href="#">Language</a>
            <hr className='line'  />
            <p className='topic'>Manage</p>
            <a href="#">Posts & Activity</a>
            <a href="#">Job Posting Account</a>
            <hr className='line'  />
            <a href="#" onClick={logoutOfApp}>Sign Out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;