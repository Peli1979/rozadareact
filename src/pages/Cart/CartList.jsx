import { useCartContext } from "../../Context/cartContext";


const CartList = () => {
    const {cartList, deleteItem, deleteCart} = useCartContext();
  return (
    <div>
       <ul>
            {cartList.map((prod) => (
              <div key={prod.id}>
                <img src={prod.foto} className="w-25" />
                Nombre: {prod.name} - Precio $ {prod.price} - cantidad:{" "}
                {prod.valor}
                <button onClick={() => deleteItem(prod.id)}>x</button>
              </div>
            ))}
          </ul>
          <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}

export default CartList
