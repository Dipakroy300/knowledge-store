import React, { useEffect, useState } from 'react';
import './BlogItems.css';
import Bookmark from '../Bookmark/Bookmark';
import DisplayBlog from '../DisplayBlog/DisplayBlog';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BlogItems = () => {

    const [blogs,setBlogs]=useState([]);
    const [posts,setPosts]=useState([]);
    const [count,setCount]=useState(0);
    useEffect(()=>{
         fetch('data.json')
         .then(res=>res.json())
         .then(data=>setBlogs(data))
    },[]);
    const handleBookmark=(blog)=>{
        const newPost=[...posts,blog];
        setPosts(newPost);
        posts.find(post=>{
            if(post.title){

                toast('you already bookmarked this blog');
            }
            
        })
    }
    const handleMarkAsRead=(time)=>{
        const newTime=count+time;
        setCount(newTime);
    }
   
    

    return (
        <div className='blogItems-container'>
            <div>
                {
                    blogs.map(blog=> <DisplayBlog 
                    blog={blog}
                    key={blog.id}
                    handleBookmark={handleBookmark}
    
                    handleMarkAsRead={handleMarkAsRead}
                    ></DisplayBlog> )
                }

            </div>
            <div className='side-container'>
                <div className='spentTimeCount'>
                    <h2>Spent time on road:{count}</h2>
                </div>
                <div className='bookmark-container'>
                    <h2>Bookmarked Blogs:{posts.length}</h2>
                    <div>
                        {
                            posts.map(post=> <Bookmark
                             key={post.id}
                             title={post.title}
                            ></Bookmark> )
                        }
                        <ToastContainer/>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default BlogItems;