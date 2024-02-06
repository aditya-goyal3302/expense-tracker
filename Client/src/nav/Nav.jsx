import React, { useState } from 'react';
import styles from './Nav.module.css';
import img1 from '../Assets/img.jpg';

const Navbar = () => {
    const [active, setActive] = useState('home');
    return (
        <nav className={styles.nav}>
            <div className="logo"><img src={img1}></img></div>
            <div className="menu_full">
                <ul>
                    <li><a href="/" className={active ==="home"?styles.active:styles.none}>Home</a></li>
                    <li><a href="/">Cashflow</a></li>   
                    <li><a href="/">Networth</a></li>
                </ul>
            </div>
            <div className="profile">Profile</div>
        </nav>
    );
};

export default Navbar;