import React from 'react';
import './Content.css';


export default function Content() {

    return (
        <div className='contentDiv'>
            <div className='content'>
                <div className='newPostDiv'>
                    <div>My Posts
                        <div>New Post</div>
                    </div>
                </div>
                <div className='postsDiv'>
                    <div>Posts
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}