import React, { Component } from "react";

class UserInfoClass extends Component {
    constructor(props) {
        super(props);
        console.log({props})
        this.state = {
            counter: 0
        }
    }
    componentDidUpdate(){
           console.log("componentDidUpdate")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    render() {
    console.log("render()")
    const { name, country, color } = this.props;

    return (
      <div style={{ border: "1px solid black", backgroundColor: color }}>
        <h1>{name}</h1>
        <h2>{country}</h2>
        <div>{this.state.counter}</div>
         <button onClick={() => this.setState({ counter: this.state.counter + 1 }) }>increase</button>
      </div>
    );
  }
}

export default UserInfoClass;