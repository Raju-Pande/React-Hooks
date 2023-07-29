import React, { useState } from "react";
import ToDo from "./ToDo";

export default function ToDoMain() {

    const [text, setText] = useState("");
    const [textArray, setTextArray] = useState([]);

    const addTask = () => {

        if (text !== "") {
            setTextArray((prevState) => {
                return [...prevState, text]
            })
        }
        setText(" ")
    }

    const deleteTask = (id) => {
        setTextArray((prevTask) => {
            return prevTask.filter((ele,index) =>{
               return index !== id;
            })
        });
    };
    

    return (
        <>
            <div>
                <input type="text" value={text} placeholder="Add Text Here" onChange={(e) => setText(e.target.value)} />
                <button onClick={addTask}>ADD</button>
            </div>
            <div>
                <ol>
                    {textArray.map((val, index) => (
                        <ToDo key={index}
                            id={index}
                            text={val}
                            deleteTask={deleteTask} />
                    ))}
                </ol>
            </div>
        </>
    )
}