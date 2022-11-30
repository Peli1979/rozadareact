
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'




const ItemListContainer = (obj) => {  
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
   
    const {categoriaId} = useParams()

   /* useEffect (()=> {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'Productos', '0BVmdXdcSa07U7vkPH9a')
        getDoc(queryCollection)
        .then((doc)=>setProduct({id: doc.id, ...doc.data()}))
    },[])*/

    useEffect (()=> {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'Productos')
      if(categoriaId)  {
          /*const queryCollection =collection(dbFirestore, 'Productos')*/
          let queryFilter = query(queryCollection, where('categoria', '==', 'categoriaId'))
          getDocs(queryFilter)
          .then((resp)=> setProducts(resp.docs.map(doc=>({id: doc.id, ...doc.data()}))))
          .catch(err => console.log(err))
          .finally(()=>setLoading(false))
          .then((doc)=>setProduct({id: doc.id, ...doc.data()}))
        }else{
            getDocs(queryCollection)
            .then((resp)=> setProducts(resp.docs.map(doc=>({id: doc.id, ...doc.data()}))))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
            .then((doc)=>setProduct({id: doc.id, ...doc.data()}))
        }
        
    }, [categoriaId] )
    
  /* useEffect(()=> {
        if (categoriaId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [categoriaId])*/

    console.log(product)
    

    // [1,2,3] => [<li>1</li>, <li>2</li>,<li>3</li>]

    return (

        loading 
            ? 
                <h2>Cargando...</h2>            
            :
            <div >
                <h1 className='bien' >Bienvenidos a Full Padel Shop!!</h1>  
                
                    {/* <button onClick={cambiarEstado}>cambiar estado</button>    */}
                    
                    <div className='cards container ml-5' >
                       

                     <ItemList products={products}/>
                        
                    
                    </div>
                </div>
                    
    
    )
}
// los eventos me disparan una nueva ejecución del componente donde se esta ejecutando 

export default ItemListContainer