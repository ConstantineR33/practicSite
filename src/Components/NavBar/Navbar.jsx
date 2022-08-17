import React from 'react';
import './Navbar.css'
import Profile from './Profile/Profile';
import Barside from './Bar/Barside';


export default function Navbar() {

    return (
        <div className='navbarDiv'>
            <Profile />
            <Barside />
        </div>
    )
}