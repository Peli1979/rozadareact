import { createContext, useContext } from "react";
import { useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)

const CartContextProvider=({children}) =>{
    const[cartList, setCartList]= useState([])
    const isInCart = (id) => cartList.findIndex(product => product.id === id)
    
    const agregarAlCarrito= (newProductCart) =>{
        let index = isInCart(newProductCart.id)
        if(index === -1){
            setCartList([...cartList, newProductCart])
        }
        else{
            cartList[index].valor += newProductCart.valor
            setCartList([...cartList] )
        }
        

    }

    const borrarCarrito = () => {
        setCartList([])
    }
    const cantidadTotal = () => {
        return cartList.reduce((count, product) => count+= product.valor, 0 )
   
    }
    const precioTotal = () => {
        return cartList.reduce((count, product)=> count += product.valor*product.price, 0)
    }

    const eliminarItem = (id) => {
        return setCartList(cartList.filter (product=> product.id !== id))
    }


    return(
        <CartContext.Provider value={{
            cartList,//estado
            agregarAlCarrito,//funcion para modificar ese estado
            borrarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }} >
            {children}
        </CartContext.Provider>
    )
    }

    export default CartContextProvider