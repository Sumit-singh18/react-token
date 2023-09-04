import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "./cartSlice";

const action = () => {
  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItems("Grapes"));
  };

  return (
    <div>
      <button onClick={handleAddItems}>Add Items </button>
    </div>
  );
};

export default action;
