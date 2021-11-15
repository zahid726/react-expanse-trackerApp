import { ExpenseData } from "../expenseDate/expenseDate";
import "./expenseList.css";
export const ExpenseList = (props) => {
  return (
      <div className="expsenseList-body">
        <h1>Expanse Tracker</h1>
        <div className="expenseList-container">
          {props.list.map((list, index) => {
            return (
              <div className="expanselists" key={index}>
                <div className="expenseData">
                  <ExpenseData date={list.date} />
                </div>
                <div className="expenseItem"> {list.title}</div>
                <div className="expensePrice">${list.price}</div>
              </div>
            );
          })}
        </div>
      </div>
  );
};
