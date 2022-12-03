
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/cartContext"


const Cart = () => {

  const {cartList, borrarCarrito, precioTotal, eliminarprod } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>

      { cartList.length !== 0 ? <> 
        <ul>
          {cartList.map((prod) =>  <div key={prod.id}>
                                      <img src={prod.foto} className="w-25" />
                                        Nombre: {prod.name} - Precio {prod.price} - cantidad: {prod.valor}
                                        <button onClick={()=> eliminarprod(prod.id)} >x</button>
                                      </div>
          )}
        </ul>
        <button onClick={borrarCarrito}>Vaciar carrito</button>
        <br></br>
        <label >{precioTotal()!== 0 && precioTotal()}</label>
        </>
          :
        <h2>No hay prodos en el Carrito <Link to="/" >Volver a Comprar</Link></h2>
          }
      
      </div>
  )
}

export default Cart
