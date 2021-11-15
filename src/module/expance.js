import react, { useState } from "react";
import { ExpenseList } from "../components/expensesList/expenseList.jsx";
import { Button } from "../components/button/button";
import { Modal } from "../components/modal/modal";

const list = [
  {
    id: 1,
    date: new Date(2021, 10, 11),
    title: "House Rent",
    price: 200,
  },
  {
    id: 2,
    date: new Date(2021, 1, 1),
    title: "books",
    price: 100,
  },
  {
    id: 3,
    date: new Date(2021, 10, 11),
    title: "tuetion fee",
    price: 50,
  },
  {
    id: 4,
    date: new Date(2021, 10, 11),
    title: "transport",
    price: 70,
  },
];
export const ExpanceApp = () => {
  const date1 = new Date(2021, 11, 10);
  const [value, setValue] = useState(false);
  const handleModal = () => {
    setValue(true);
  };

  return (
    <>
      <Button onclick={handleModal} value="add new expance" type="button" />
      <ExpenseList list={list} />;
      {value && <Modal list={list} value={setValue} />}
    </>
  );
};
