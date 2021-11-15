import react from "react";
import "./button.css"

export const Button = (props)=>{
    return (
        <div className="btnContainer">
            <button className="primaryBtn" type={props.type} onClick={props.onclick}>{props.value}</button>
        </div>
    )
}