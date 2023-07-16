import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, expenses, Budget, Location } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += (item.unitprice * item.quantity));
}, 0);
  const handleBudgetChange = (newVal) => {
    let reg = /^[0-9]+$/;
    if (reg.test(newVal)) {
      if (newVal > 20000) {
        alert(`Value cannot exceed 20000 remaining funds ${Location}${Budget}`);
      }
      if(newVal < totalExpenses) {
        alert(`You cannot reduce budget lower than spending`);
      }
      dispatch({
        type: "ADD_BUDGET",
        payload: newVal,
      });
    }
  };
  return (
    <div className="alert alert-primary">
      <span>
        Budget {Location}:
        <input
          type="number"
          step={10}
          value={Budget}
          onChange={(event) => handleBudgetChange(event.target.value)}
        />
      </span>
    </div>
  );
};

export default Budget;
