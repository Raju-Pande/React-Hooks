import React, { useState } from "react";
import ToDoMain from "./ToDoMain";

export default function App() {

  let time = new Date().toLocaleTimeString()

  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }, 1000)

  

  return (
    <>
      <h1>TIME APP</h1>
      <h2>{currentTime}</h2>
      <ToDoMain />
    </>
  )

}