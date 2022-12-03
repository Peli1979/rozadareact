
import { collection, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import {  useCartContext } from '../Context/cartContext'
//import { gFetch } from '../utils/gFetch'
import Contador from './Contador/Contador'
import ItemList from './ItemList/ItemList'

const ItemDetail = ({item}) => {

    const [items, setitems] = useState([])
    
   
    
    const [loading, setLoading] = useState(false)
    const [isCounter, setIsCounter ] = useState(true)
    const {itemId} =useParams()
    const {cartList, agregarAlCarrito} = useCartContext()
    

    const onAdd = (valor) =>{
        agregarAlCarrito({...item, valor})
        setIsCounter(false)
    }
    console.log(cartList)

    
   

   /*useEffect(()=> {
        if (itemId) {
            gFetch()
            .then(resp =>  setitems(resp.filter(prod => prod.id === itemId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
            
        }else{
            gFetch()
            .then(resp =>  setitems(resp))    
            .catch(err => console.log(err))
            
        }
        
        
    }, [itemId])
    
    

    // [1,2,3] => [<li>1</li>, <li>2</li>,<li>3</li>]*/

    return (

        loading 
            ?
            <h2>Cargando...</h2>
            :

            <div >
                <h1>Detalles del Producto</h1>  
                <img src={item.foto} className="w-25" />
                <p>Categoría: {item.categoria}</p>
                <p>Precio: {item.price}</p>
                 <p>stock: {item.stock}</p>
                
                    
                    {/* <button onClick={cambiarEstado}>cambiar estado</button>    */}
                    <div className='contador' >
                    
                    { isCounter ? 
                    <>
                    <h2>Contador</h2>
                    <Contador stock={10} initial={1} onAdd={onAdd} />
                    
                    </>
                    :
                    <div className="container mt-5">
                    <Link to='/cart' className="btn btn-success">Terminar mi compra</Link>
                    <Link to='/' className="btn btn-success">Seguir Comprando </Link>
                    </div>
                    
                }
                    </div>
                    <div className='cards container ml-2' >
                       

                      
                        

                    </div>
                </div>
                    
    
    )
}


export default ItemDetail
