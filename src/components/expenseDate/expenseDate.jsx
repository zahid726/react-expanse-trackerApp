import "./expsenseDate.css";

export const ExpenseData = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  // const day= props.date.getDay()
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expenseData">
      <div className="day">{day}</div>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
    </div>
  );
};
