import react from "react";
import "./input.css"

export const  Input = (props)=>{
    return (
    <input name={props.name} type={props.type}></input>
    )
}