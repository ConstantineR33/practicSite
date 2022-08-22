import React from 'react';
import myPostStyle from './myPost.module.css';


export default function MyPost(props) {

    return (
        <div className={myPostStyle.myPostMain}>
  <div className={myPostStyle.postsMessageFromMeImg}>
                    <img src='http://tamgdeya.ru/photos/norm/1/1_wO3vCsis.jpg' />
                </div>
            <div className={myPostStyle.postsMessageFromMe}>             
                <div className={myPostStyle.postsMyMessage}>
                  {props.message}
                </div>
            </div>
        </div>
    )
}