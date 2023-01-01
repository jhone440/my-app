import React from 'react'

export default function List() {


    const todo = [
        {id: 1, text:"oooo"},
        {id: 2, text:"ohodfg"},
        {id: 3, text:"sdgsadgdsa"},

    ]

    const Item =(props) => {
        return(
            <li>
                {props.id}
                {props.text}
            </li>
        )
    }

    const todoList = todo.map((todo) =><Item key={todo.id} text={todo.text}/>); 
     
    return <>{todoList}</>;
            

//     const numbers = [0,1,2,3,4,5];
//   return (
//     <div>
//         {numbers.map((number) => (
//         <h1 key={number.toString()}>{number}</h1>
//         ))}

//     </div>
//   )
}
