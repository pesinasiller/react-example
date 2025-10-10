import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import './UserInfo.css';

function UserInfo(props) {
    const [counter, setCounter] = useState(0);
    const { name, country, color, image } = props;
    const [pressed, setPressed] = useState(false);

    const togglePressed = () => {
      setPressed(!pressed)
    }

    const buttonStyle = pressed ?  "user-info-pressed" : "user-info";

  return (
    <div onClick={togglePressed} togglePressed className={buttonStyle} style={{ border: "1px solid black" , backgroundColor: color }}>
        <ProfilePicture url={image}  width="300" />
        <h1>{name}</h1>
        <h2>{country}</h2>
        <div style={{border: '2px solid green', backgroundColor: 'white'}}>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>increase</button>
    </div>
  )
}

export default UserInfo;



