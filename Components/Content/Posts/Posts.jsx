import React from 'react';
import postsStyle from './Posts.module.css';
import Post from './Post/Post';
import MyPost from './myPost/MyPost';


export default function Posts() {

    return (
        <div className={postsStyle.postsDiv}>
            <div className={postsStyle.postsMain}>
                <div className={postsStyle.postDiv}>
                    <Post message = 'Hello whats up?'/>
                    <Post message = 'its my first posts writing code so dont be hard to me'/>
                    <MyPost message = 'Hello whats up?! my name is Constantine'/>
                    <MyPost message = 'i want to be proger.'/>
                </div>
            </div>
        </div>
    )
}