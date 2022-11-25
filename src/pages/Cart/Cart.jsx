
import { useCartContext } from "../../Context/cartContext"


const Cart = () => {

  const {cartList, borrarCarrito } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((prod) =>  <div key={prod.id}>
                                     <img src={prod.foto} className="w-25" />
                                      Nombre: {prod.name} - Precio {prod.price} - cantidad: {prod.cantidad}
                                    </div>
        )}
      </ul>
      <button onClick={borrarCarrito}>Vaciar carrito</button>
    
    </div>
  )
}

export default Cart
