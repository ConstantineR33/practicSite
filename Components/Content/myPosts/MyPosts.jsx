import React from 'react';
import MypostsStyle from'./MyPosts.module.css';


export default function MyPosts(props) {

 

    return (
                <div className= {MypostsStyle.newPostDiv}>
                    <div className={MypostsStyle.myPostDiv}>
                        <div className={MypostsStyle.textareaDiv}>
                        <textarea className={MypostsStyle.textArea}></textarea>
                        <div className={MypostsStyle.aDiv}>
                        <div><a className={MypostsStyle.a} href=''>Enter</a></div>
                        </div>
                        </div>
                    </div>
                </div>
    )
}