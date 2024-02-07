import React, { useState } from 'react';
import styles from './Nav.module.css';
import img1 from '../Assets/img.jpg';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import { useSelector } from 'react-redux';
import Avatar from './avatar'

const Navbar = () => {
    const [active, setActive] = useState('home');
    const isAuth = useSelector(state => state.user.isAuth)
    


    return (
        <nav className={styles.nav}>
            <div className="logo"><img src={img1}></img></div>
            <div className="menu_full">
            {isAuth&&(
                <ul>
                    <li><a href="/" className={active ==="home"?styles.active:styles.none}><HomeRoundedIcon/>&nbsp; Home</a></li>
                    <li><a href="/" className={active ==="cf"?styles.active:styles.none}><AccountBalanceWalletRoundedIcon/>&nbsp; Cashflow</a></li>   
                    <li><a href="/" className={active ==="nw"?styles.active:styles.none}><SignalCellularAltRoundedIcon/>&nbsp; Net Worth</a></li>
                </ul>
            )}
            </div>
            <div className="profile">
            < Avatar />
            </div>
        </nav>
    );
};

export default Navbar;