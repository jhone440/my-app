import React from 'react'
import { useState } from 'react';

export default function ControlComponent() {

  const [value, setValue] = useState("");
  const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");

  const[favor, setFavor] = useState("Select your favor!");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleEssayChange(event) {
    setEssay(event.target.essay);
  }
  
  function handleFavorChange(event) {
    setFavor(event.target.favor);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  }




  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={value} onChange={handleChange} />
    </label>
    <label>
          Essay:
      <textarea value={essay} onChange={handleEssayChange} />
    </label>

    <label>
          Pick your favorite flavor:
          <select value={favor} onChange={handleFavorChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>


    <input type="submit" value="Submit" />
   </form>
  )
}
