import { createContext, useContext } from "react";
import { useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState(false);
  const [orderId, setOrderId] = useState({});
  const isInCart = (id) => cartList.findIndex((product) => product.id === id);

  const addCart = (newProductCart) => {
    setOrder(false);
    let index = isInCart(newProductCart.id);
    if (index === -1) {
      setCartList([...cartList, newProductCart]);
    } else {
      cartList[index].valor += newProductCart.valor;
      setCartList([...cartList]);
    }
  };

  const deleteCart = () => {
    setCartList([]);
  };
  const totalQuantity = () => {
    return cartList.reduce((count, product) => (count += product.valor), 0);
  };
  const totalPrice = () => {
    return cartList.reduce(
      (count, product) => (count += product.valor * product.price),
      0
    );
  };

  const deleteItem = (id) => {
    return setCartList(cartList.filter((product) => product.id !== id));
  };
  const showOrder = (id) => {
    setOrder(true);
    setOrderId(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        deleteCart,
        totalQuantity,
        totalPrice,
        deleteItem,
        showOrder,
        order,
        orderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
