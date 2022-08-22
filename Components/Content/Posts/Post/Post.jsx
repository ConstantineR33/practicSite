import React from 'react';
import postStyle from './Post.module.css';


export default function Post(props) {

    return ( 
            <div className={postStyle.incomingMessage}>
                <img src='https://play-lh.googleusercontent.com/MmLHNN4_lwIN7kMG7XWnOxSYbEju-FBMEn8oDj4Xt8t9EnnH6S6GQeMHJDWpGfeDOSpM' />
                  <div className={postStyle.postsMessage}>
                    {props.message}
                  </div>
                  </div>
    )
}