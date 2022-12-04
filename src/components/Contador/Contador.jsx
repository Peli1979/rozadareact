import { useState } from "react";

import "./Contador.css";

const Counter = ({ initial = 1, stock = 100, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addQuantity = () => {
    onAdd(quantity);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      {quantity}
      <button onClick={sumar}>+</button>
      <br></br>
      {
        <button className="btn btn-outline-primary" onClick={addQuantity}>
          Agregar al carrito
        </button>
      }
    </div>
  );
};

export default Counter;
