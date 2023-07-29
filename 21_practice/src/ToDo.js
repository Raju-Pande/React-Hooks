import React from "react";

export default function ToDo (props){
    return(
        <>
        <div>
            <li>{props.text}
             <button onClick={()=>props.deleteTask(props.id)}>Delete</button></li>
        </div>
        </>
    )
}