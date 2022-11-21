
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'






const ItemListContainer = () => {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    useEffect(()=> {
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
        
        
    }, [categoriaId])

    
    console.log(categoriaId)

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