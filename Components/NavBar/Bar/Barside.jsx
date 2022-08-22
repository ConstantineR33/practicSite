import React from 'react';
import barStyle from'./Barside.module.css'


export default function Barside() {


    return (
        <nav className={barStyle.navbar}>
            <div className={barStyle.navBtnDiv}>
            <div className={barStyle.navBtn}><a className={barStyle.abtn} href=''>Profile</a></div>
            <div className={barStyle.navBtn}><a className={barStyle.abtn} href=''>News</a></div>
            <div className={barStyle.navBtn}><a className={barStyle.abtn} href=''>Music</a></div>
            <div className={barStyle.navBtn}><a className={barStyle.abtn}  href=''>Settings</a></div>
            </div>
        </nav>
    )
}