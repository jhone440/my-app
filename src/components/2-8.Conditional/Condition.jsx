import React from 'react'


function UserGreeting(props){
    return <h1>Welcome! {props.name}</h1>
}



function UserFailed(props){
    return <h1>{props.name}, Login failed</h1>
}

function Greeting(props){
    return props.isLogginIn ?  <UserGreeting name="HYEON" count={0} /> : <UserFailed name="Guest" count={1} />;
    // if(props.isLogginIn){
    //     return <UserGreeting name="HYEON" count={0} />
    // }
    // return (
    //     <UserFailed name="Guest" count={1} />)

}

export default function Condition() {

    const isLogginIn = true;
  return (
    <div>
        <Greeting isLogginIn ={isLogginIn} />   
    </div>
  )
}
