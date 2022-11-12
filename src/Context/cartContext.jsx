/*import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([])


const CartContextProvider=({children}) =>{
    const[cartList, setCartList]= useState([])

    const agregarAlCarrito= (newProductCart) =>{
        setCartList(newProductCart)

    }
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito
        
        }} >
            {children}
  </CartContext.Provider>
    )
    }*/