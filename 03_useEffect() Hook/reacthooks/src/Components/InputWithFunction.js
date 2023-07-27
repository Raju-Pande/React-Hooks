import { useState, useEffect, Component } from "react";
export default function Input() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("")

    // componentDidMount and componentDidUpdate 

    // The useEffect() hook lets you synchronize a component with an external system such as a browser API or a server. You can execute the lifecycle methods that are available in class based components, using the useEffect() hook.

    // useEffect to update the document title when lastName changes
    useEffect(() => {
        document.title = name + " " + lastName
    }, [lastName]);

    // useEffect to log window width every 2 seconds
    useEffect(() => {
        let timer = setInterval(() => {

            console.log("window_width : ", window.innerWidth);
        }, 2000);

        return (clearInterval(timer)); // Cleanup the interval on component unmount
    })

    return (
        <>
            <div className="section">
                <Row label="Name">
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
                </Row >
                <Row label="Last Name">
                    <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Row >
            </div>

            <h2>Hello, {name + " " + lastName} </h2>

        </>
    )
}


function Row(props) {
    const { label } = props;
    return (
        <>
            <lable>{label}<br /></lable>
            {props.children}
            <hr />
        </>
    )
}


// Note
//     -useEffect(() => { }, [])    -- > componentDidMount()
//     - useEffect(() => { })       -- > componentDidMount(), componentDidUpdate()
//     - useEffect(() => { return () => { } }, [])  -- > componentDidMount(), componentWillUnmount()
//     - useEffect(() => { }, [someCondition])  -- > componentDidMount(), componentDidUpdate()(Only on a condition)


// The useEffect() hook's returning function acts as componentWillUnmount(). Option B returns the cleanup function call while option C returns a callback function that executes the cleanup function. Both methods are valid for handling the side effect.