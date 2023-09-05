import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "./cartSlice";

const Action = () => {
  const Dispatch = useDispatch();

  const handleAddItems = () => {
    Dispatch(addItems("Grapes"));
  };

  return (
    <div>
      <button onClick={handleAddItems}>Add Items </button>
    </div>
  );
};

export default Action;
