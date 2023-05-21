import React, { useEffect, useState } from  'react';
import axios from 'axios';

export default ({ comments }) => {
    // const [comments, setComments] = useState([]);
    // const fetchData = async () => { 
    //     const res = await axios.get(`http://posts.com:4001/posts/${postId}/comments`);
    //     setComments(res.data);
    // };
    
    // useEffect(() => {
    //     fetchData();
    // }, []);
    const renderComments = comments.map((comment) => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content
        }
        if (comment.status === 'pending') {
            content = 'pending'
        }
        if (comment.status === 'rejected') {
            content = 'has been rejected.'
        }
        return <li key={comment.id}>{content}</li>;
    });
    return <ul>
        {renderComments}
    </ul>
}