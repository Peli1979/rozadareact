
import { collection, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import {  useCartContext } from '../Context/cartContext'
import { gFetch } from '../utils/gFetch'
import Contador from './Contador/Contador'
import ItemList from './ItemList/ItemList'

const ItemDetail = () => {

    const [products, setProducts] = useState([])
    const [item, setItem] = useState([]);
   
    
    const [loading, setLoading] = useState(true)
    const [isCounter, setIsCounter ] = useState(true)
    const {productId} =useParams()
    const {cartList, agregarAlCarrito} = useCartContext()
    

    const onAdd = (valor) =>{
        console.log(valor)
        agregarAlCarrito({...products[0], valor})
        setIsCounter(false)
    }
    console.log(cartList)

    
   

    /*useEffect(()=> {
        if (productId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.id === productId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            
        }
        
        
    }, [productId])*/
    
    

    // [1,2,3] => [<li>1</li>, <li>2</li>,<li>3</li>]

    return (

        loading 
            ?
            <h2>Cargando...</h2>
            :

            <div >
                <h1>Detalles del Producto</h1>  
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
                       

                    <ItemList products={products}/>     
                        

                    </div>
                </div>
                    
    
    )
}


export default ItemDetail
