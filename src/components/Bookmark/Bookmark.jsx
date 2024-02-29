import React from 'react';
import './Bookmark.css';
const Bookmark = (props) => {
    return (
        <div className='bookmark-div'>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Bookmark;