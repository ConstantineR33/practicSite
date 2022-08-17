
import React from 'react';
import './HomeScrean.css';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';
import Shop from '../Shop/Shop';
import Content from '../Content/Content'






export default function HomeScrean() {





    return (
        <div className="HomeScrean">
            <div className='headerDiv'>
                <Header />
            </div>
            <div className='navbarDiv'>
                <Navbar />
            </div>
            <div className='contentDiv'>
                <Content />
            </div>
            <div className='shop'>
                <Shop />
            </div>
        </div>
    );
}

