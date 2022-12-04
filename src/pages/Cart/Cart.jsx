import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import CartList from "./CartList";

const Cart = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    emailCheck:""
  });

  const {
    cartList,
    deleteCart,
    totalPrice,
    showOrder,
    orderId,
    order
  } = useCartContext();

  const createOrder = (evt) => {
    evt.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = totalPrice();
    orden.Productos = cartList.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
  if (dataForm.email === dataForm.emailCheck) {
  const db = getFirestore();
  const queryCollection = collection(db, "orders");
    addDoc(queryCollection, orden)
      .then((resp) => showOrder(resp.id))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
        deleteCart();
      });}else{
        note()
      }
  };
  const note = () =>
    alert("La direccion de email no es correcta");


  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    
    <div>
      <h1>Carrito Ecommerce</h1>

      {cartList.length !== 0 ? (
        <>
         <CartList/>

          <form>
            <input
              required
              type="text"
              name="name"
              onChange={handleOnChange}
              value={dataForm.name}
              placeholder="Ingrese nombre"
            />
            <input
              required
              type="email"
              name="email"
              onChange={handleOnChange}
              value={dataForm.email}
              placeholder="Ingrese mail"
            />
            <input
              required
              type="email"
              name="emailCheck"
              onChange={handleOnChange}
              placeholder="Repetir mail"
            />
            <input
              required
              type="number"
              name="phone"
              onChange={handleOnChange}
              value={dataForm.phone}
              placeholder="Ingrese telefono"
            />

            <button className="btn btn-outline-success" onClick={createOrder}>
              Generar orden
            </button>
          </form>

          <br></br>
          <label>
            IMPORTE TOTAL A PAGAR ${totalPrice() !== 0 && totalPrice()}
          </label>
        </>
      ) : (
        <>
          <h2>
            No hay productos en el Carrito <Link to="/">Volver a Comprar</Link>
            <br></br>
          <label>N° de orden: {orderId}</label>
          </h2>
        </>
      )}
    </div>
  );
};

export default Cart;
