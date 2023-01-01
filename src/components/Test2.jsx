import React from 'react'
import { useState } from 'react';



export default function Test2() {
    
    const [keyword,setKeyword] = useState("");
    const [keywords,setKeywords] = useState([]);
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(keyword === ""){
            return ; 
        }
        setKeywords(currentArray =>[keyword, ...currentArray])
        setKeyword(""); 
    }

    

    return (
        <div>
            <h1>My To Dos ({keywords.length})</h1>
            <form id='form' onSubmit={onSubmit}>
                <input onChange={onChange} value={keyword} type="text" placeholder='good!' />
                <button >add to do</button>
            </form>
            <hr />
            <ul>{keywords.map((item, index) => <li key={index}>{item}</li>)}</ul>
            
        </div>
    )
}
