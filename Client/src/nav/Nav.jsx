import React, { useState } from 'react';
import styles from './Nav.module.css';
import img1 from '../Assets/img.jpg';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isauth,setisauth] = useState(true)

    return (
        <nav className={styles.nav}>
            <div className="logo"><img src={img1}></img></div>
            <div className="menu_full">
            {isauth&&(
                <ul>
                    <li><a href="/" className={active ==="home"?styles.active:styles.none}><HomeRoundedIcon/>&nbsp; Home</a></li>
                    <li><a href="/"><AccountBalanceWalletRoundedIcon/>&nbsp; Cashflow</a></li>   
                    <li><a href="/"><SignalCellularAltRoundedIcon/>&nbsp; Networth</a></li>
                </ul>
            )}
            </div>
            <div className="profile">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        </nav>
    );
};

export default Navbar;