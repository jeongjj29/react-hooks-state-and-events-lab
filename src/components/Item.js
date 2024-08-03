import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={addToCart ? "in-cart" : ""}
        onClick={() => setAddToCart(!addToCart)}
      >
        {addToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
