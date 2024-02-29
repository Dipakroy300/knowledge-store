import React from 'react';
import './DisplayBlog.css'

const DisplayBlog = (props) => {

    const {id,time,name,title,tags,coverImg,picture,date}=props.blog;
    const handleBookmark=props.handleBookmark;
    const handleMarkAsRead=props.handleMarkAsRead;
    return (
        <div className='blog-container'>
            <img src={coverImg} alt="" />
            <div className='blog-item'>
               <div className='blog-person'>
                  <img src={picture} alt="" />
                  <div className='blog-info'>

                        <h2>{name}</h2>
                        <p>{date}</p>
                  </div>
               </div>
               <div>
                <p>{time} min read <span className='bookmark'onClick={()=>handleBookmark(props.blog)}></span> </p>
               </div>
            </div>
            <h1>{title}</h1>
            <p> <a href="/tag">{tags}</a> </p>
            <p onClick={()=>handleMarkAsRead(time)} className='markAsRead'  >Mark as read </p>
            <hr />
        </div>
    );
};

export default DisplayBlog;