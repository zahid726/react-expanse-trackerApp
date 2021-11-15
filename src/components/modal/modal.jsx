import react, { useState } from "react";
import { ExpenseForm } from "../ExpenseForm/expenseForm";
import "./modal.css"
export const Modal = (props) => {
    
   
    const handleModal=()=>{
      (props.value(false))
    }
  return (
    <>
      <div className="modal">
        <div className="modalhead">
          <span onClick={handleModal}>X</span>
        </div>
        <div id="modalbdy">
          <ExpenseForm list={props.list} value={props.value}/>
        </div>
      </div>
    </>
  );
};
