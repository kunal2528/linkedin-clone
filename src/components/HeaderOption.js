import React from 'react';
import '../styles/HeaderOpiton.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function HeaderOption({avatar, menu, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <Avatar className='headerOption_icon' src={user?.photoURL}>{user?.email[0].toUpperCase()}</Avatar>}
      <div className='headerOption_menu'>
        <h3 className='headerOption_title'>{title}</h3>
        {menu && <ExpandMoreIcon className='menu_icon' />}
      </div>
    </div>
  )
}

export default HeaderOption