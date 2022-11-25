import { createContext, useContext } from "react";
import { useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)

const CartContextProvider=({children}) =>{
    const[cartList, setCartList]= useState([])

    const agregarAlCarrito= (newProductCart) =>{
        setCartList([...cartList, newProductCart])

    }
    return(
        <CartContext.Provider value={{
            cartList,//estado
            agregarAlCarrito//funcion para modificar ese estado
        
        }} >
            {children}
        </CartContext.Provider>
    )
    }

    export default CartContextProvider