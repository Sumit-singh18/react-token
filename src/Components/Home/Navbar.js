import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartItem = useSelector(store => store.cart.items);

  return (
    <div>
      <ul >
      <li>Home</li>
      <li>Menu</li>
      <li>Cart{cartItem.length}</li>
      <li>Items</li>
      </ul>
    </div>
  );
};

export default Navbar;
