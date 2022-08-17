import React from 'react';
import './Profile.css'





export default function Profile() {


    return (
        <div className='profileNav'>
            <div className='Profile'>
                <img className='Ava' src='http://tamgdeya.ru/photos/norm/1/1_wO3vCsis.jpg' />
                <div className='profileSideInfo'>
                    <div className='profileSideInfoDiv'>Name: Constantine Roter</div>
                    <div className='profileSideInfoDiv'>Age: 33</div>
                    <div className='profileSideInfoDiv'>Male: Man</div>
                    <div className='profileSideInfoDiv'>Country: Israel</div>
                </div>
            </div>
            <div className='profileBar'>
                <div className='navBtn'><a className='abtn' href=''>About</a></div>
                <div className='navBtn'><a className='abtn' href=''>hobies</a></div>
                <div className='navBtn'><a className='abtn' href=''>Music i love</a></div>
                <div className='navBtn'><a className='abtn' href=''>Messages</a></div>
            </div>

        </div>
    )
}