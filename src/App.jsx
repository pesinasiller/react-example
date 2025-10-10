import React, { Component } from "react";
import UserInfo from "./UserInfo";
import UserInfoClass from './UserInfoClass';


const users = [
  { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
  { name: "carlos 1", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos 2", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos 3", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
];

class App extends Component {
  constructor(props){
    super(props);
  }
  /*
  componentDidMount(){
     fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((data)=>{
        console.log({data})
      })
  
  }*/

  render(){

    
    const usersList = users.map((user)=> {
      const { name, country, profilePicture } = user; 
      return (<UserInfo name={name}  country={country} image={profilePicture} />)
    });


    return(
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* 
        <UserInfoClass name="Carlos" country="Mexico" color="orange" />
        <UserInfo name="Mahdia" country="Afganistan" color="blue" image="https://cdn2.thecatapi.com/images/5dF28H7__.jpg" />
        <UserInfo name="Maria" country="España" color="pink" image="https://cdn2.thecatapi.com/images/5dF28H7__.jpg"  />
         */}
        {usersList}
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