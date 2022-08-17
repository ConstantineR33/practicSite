import React from 'react';
import './Header.css'

export default function Header() {

    return (

        <div className='headerDiv'>
            <header className='header'>
                <div className='headersOptions'>
                    <div className='logo'><img className='logoImg' src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg' /></div>
                    <div className='headeroption'><a className='headeroption' href=''>About</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>hobies</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>search</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>search</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>search</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>search</a></div>
                    <div className='headeroption'><a className='headeroption' href=''>search</a></div>
                </div>
            </header>
        </div>
    )
}