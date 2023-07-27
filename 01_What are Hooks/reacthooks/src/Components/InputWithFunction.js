// import { useState } from "react";
// export default function Input() {

//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("Pande")
//     return (
//         <>
//             <div className="section">
//                 <Row label="Name">
//                     <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
//                 </Row >
//                 <Row label="Last Name">
//                     <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                 </Row >
//             </div>

//             <h2>Hello, {name + " " + lastName} </h2>

//         </>
//     )
// }


// function Row(props) {
//     const { label } = props;
//     return (
//         <>
//             <lable>{label}<br /></lable>
//             {props.children}
//             <hr />
//         </>
//     )
// }

import { useState } from "react";

export default function Input() {

    let [count, setCount] = useState(0)


    return (
        <>
            <button onClick={(e) => setCount(count += 1)}>Increase </button> {count}
            <br />
            <br />
            <button onClick={(e) => {
                if (0 < count) {
                    setCount(count -= 1)
                }
            }}>Dec</button>
        </>
    )
} 
