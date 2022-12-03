
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/cartContext"


const Cart = () => {
  const [dataForm, setDataForm] = useState({
    name:'',
    phone:'',
    email:''

  })

  const [idOrder, setIdOrder] = useState()

  
  const {cartList, borrarCarrito, precioTotal, eliminarItem } = useCartContext()
  
  const generarOrden = (evt) =>{
    evt.preventDefault()
  let orden = {}
  orden.buyer = dataForm
  orden.total = precioTotal()
  orden.Productos = cartList.map(product =>({
    id:product.id, 
    name:product.name, 
    price:product.price
  }))
  
  const db = getFirestore()
  const queryCollection = collection(db, 'orders')
  addDoc(queryCollection, orden)
  .then(resp => console.log(resp.id))
  .finally(() =>{
    setDataForm({
      name:'',
      phone:'',
      email:'',
    })
    borrarCarrito()
    
  })


  
  }

  const handleOnChange = (evt) =>{
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
    console.log(dataForm)
  }
  
  return (
    <div>
      <h1>Carrito</h1>

      { cartList.length !== 0 ? <> 
        <ul>
          {cartList.map((prod) =>  <div key={prod.id}>
                                      <img src={prod.foto} className="w-25" />
                                        Nombre: {prod.name} - Precio $ {prod.price} - cantidad: {prod.valor}
                                        <button onClick={()=> eliminarItem(prod.id)} >x</button>
                                      </div>
          )}
        </ul>
        <button onClick={borrarCarrito}>Vaciar carrito</button>

        <form>
          
          <input type='text' name='name' onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese nombre"/>
          <input type='text' name='email' onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese mail"/>
          <input type='text' name='repetirEmail' onChange={handleOnChange} placeholder="Repetir mail"/>
          <input type='text' name='phone' onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese telefono"/>

          <button className="btn btn-outline-success" onClick={generarOrden}>Generar orden</button>
        </form>

        <br></br>
        <label >IMPORTE TOTAL A PAGAR ${precioTotal()!== 0 && precioTotal()}</label>
        </>
          :
          <>
        <h2>No hay productos en el Carrito <Link to="/" >Volver a Comprar</Link></h2>
        <label></label>
          </>
          }
      
      </div>
  )
}

export default Cart
