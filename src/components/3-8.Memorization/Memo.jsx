
import React, { useEffect, useState } from 'react'
import Comments from './Comments';

const commentList = [
  {title: "dsfgs", content: "message1", likes: 1},
  {title: "dsfgs2", content: "message2", likes: 2},
  {title: "dsfgs3", content: "message3", likes: 3}
]

export default function Memo() {
  const [comments, setComments]  = useState(commentList);   
  
  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ... prevComments,
        {
          title: prevComments.length + 1, 
          content: prevComments.content, 
          likes: prevComments.likes
        } 
      ])
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  },[]);
  return (
    <Comments commentList={comments} />
  )
}
