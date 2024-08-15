import React, { useState } from 'react'
import { UserPost } from './components/UserPost';


export const PostView = () => {
 
    return (
        <div>
            <button>+ New Post</button>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800"> Create New Post</div>
            <div className="editor mx-auto w-8/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" />
                <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"></textarea>

                <div className="icons flex justify-between text-gray-500 m-2">
                 <input type='file'/>
                  
                 <div className="btn border border-indigo-500 p-1 px-4 float-end font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                </div>

            </div>
            <UserPost />
          
        </div >
    )
}

