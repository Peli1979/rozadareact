import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";

import Counter from "./Contador/Contador";

const ItemDetail = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const [isCounter, setIsCounter] = useState(true);

  const { cartList, addCart } = useCartContext();

  const onAdd = (valor) => {
    addCart({ ...item, valor });
    setIsCounter(false);
  };
  console.log(cartList);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>
      <>
        <h1>Detalles del Producto</h1>
        <div className="contador">
          {isCounter ? (
            <>
              <h2>Contador</h2>
              <Counter stock={10} initial={1} onAdd={onAdd} />
            </>
          ) : (
            <div className="container mt-5">
              <Link to="/cart" className="btn btn-success">
                Terminar mi compra
              </Link>
              <Link to="/" className="btn btn-success">
                Seguir Comprando{" "}
              </Link>
            </div>
          )}
        </div>
        <img src={item.foto} className="w-25" />
        <p>Producto: {item.name}</p>
        <p>Categoría: {item.categoria}</p>
        <p>Precio: {item.price}</p>
        <p>stock: {item.stock}</p>
      </>
    </div>
  );
};

export default ItemDetail;
