import react, { useState } from "react";
import { Input } from "../input/input";
import { Button } from "../button/button";
import "./expenseForm.css";

export const ExpenseForm = (props) => {
  const [value, setvalue] = useState({
    id: "",
    title: "",
    price: "",
    date: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    props.value(false);
    if (!value.id || !value.title || !value.price || !value.date) {
      alert("fill the fields first");
    } else props.list.push(value);
  };

  let handleChange = (event) => {
    setvalue({
      ...value,
      [event.target.name]:
        event.target.name === "date"
          ? new Date(event.target.value)
          : event.target.value,
    });
  };
  return (
    <>
      <div className="form">
        <form onSubmit={submitHandler} onChange={handleChange}>
          <label htmlFor="">Id</label>
          <Input name="id" type="text"/>
          <label htmlFor="">Title</label>
          <Input name="title" type="text"/>
          <label htmlFor="">Price</label>
          <Input name="price" type="text"/>
          <label htmlFor="">Date</label>
          <Input name="date" type="date"/>
         <Button type="submit" value="Add"/>
        </form>
      </div>
    </>
  );
};
