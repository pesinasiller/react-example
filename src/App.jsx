import React, { Component } from "react";

import UserInfo from "./UserInfo";
import UserInfoClass from './UserInfoClass';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
     fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((data)=>{
        console.log({data})
      })
  
  }
  render(){
    return(
      <div>
        <UserInfoClass name="Carlos" country="Mexico" color="orange" />
        <UserInfo name="Mahdia" country="Afganistan" color="blue" />
        <UserInfo name="Maria" country="España" color="pink" />
        <button>Hello world asdfsadf</button>
      </div>
    )
  }
}

export default App;


/*
function App() {
  return (
    <div>
      <UserInfoClass name="Carlos" country="Mexico" color="orange" />
      <UserInfo name="Mahdia" country="Afganistan" color="blue" />
      <UserInfo name="Maria" country="España" color="pink" />
      <button>Hello world asdfsadf</button>
    </div>
  )
}*/