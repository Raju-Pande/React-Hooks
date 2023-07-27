import React from "react";

export default class Input extends React.Component{

    constructor(){
        super();

        this.state={
            name:"",
            lastName:""
        }
    }

    handleName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    

    handleLastName=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }


    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" value={this.state.name} onChange={this.handleName}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" value={this.state.lastName} onChange={this.handleLastName}/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name+ " "+this.state.lastName} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}



// Hooks can only be used in functional components. Access to React state and lifecycle methods, such as componenentDidMount(), componentDidUpdate(), etc., are provided by different Hooks.