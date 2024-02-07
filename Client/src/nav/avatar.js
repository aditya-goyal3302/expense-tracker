import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../Store/userSlice';
import { useEffect } from 'react';
import { useState } from 'react';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const isauth = useSelector(state => state.user.isAuth)
  const logout = () => {
    handleClose()
    dispatch(Logout())
}
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    handleClose()
  },[isauth])

  return (
    <div>
      <Avatar 
        alt={user.name} 
        src={user.image || "/static/images/avatar/1.jpg"} 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      {isauth && (<Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>)}
    </div>
  );
}