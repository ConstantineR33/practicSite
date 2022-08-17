import React from 'react';
import './Barside.css'


export default function Barside() {


    return (
        <nav className='navbar'>
            <div className='navBtn'><a className='abtn' href=''>Profile</a></div>
            <div className='navBtn'><a className='abtn' href=''>News</a></div>
            <div className='navBtn'><a className='abtn' href=''>Music</a></div>
            <div className='navBtn'><a className='abtn' href=''>Settings</a></div>
        </nav>
    )
}