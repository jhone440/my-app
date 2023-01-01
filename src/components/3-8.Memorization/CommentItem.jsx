import React, { memo } from 'react'

function CommentItem({title, content, likes}) {
 
    return (
        <div>
            <span>{title}</span>
            <br />
            <span>{content}</span>
            <br />
            <span>{likes}</span>
            
            <br />
            <br />

        </div>
 
    )
}

export default memo(CommentItem);

