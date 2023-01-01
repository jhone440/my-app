import React, { useState } from 'react'
import { useRef } from 'react';

export default function UncontrolComponent() {

    const fileInputRef = useRef(null); 

    function handleSubmit(event) {
        event.preventDefault();
        alert(
          `Selected file - ${fileInputRef.current.files[0].name}`
        );
      }
    


    return (
        <form onSubmit={handleSubmit}>
        <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>
    )
}
