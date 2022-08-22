import React from 'react';
import './Content.css';
import MyPosts from './myPosts/MyPosts';
import Posts from './Posts/Posts';


export default function Content() {

    return (
        <div className='contentDiv'>
            <div className='content'>
               <MyPosts/>
              <Posts/>
            </div>
        </div>
    )
}