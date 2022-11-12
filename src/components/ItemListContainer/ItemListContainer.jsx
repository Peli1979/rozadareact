
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'




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
                       

                    { products.map( obj =>  <div key={obj.id} className= 'card w-25 p-3 m-5 me-3 mb-1'>
                                            <Link to={`/detail/${obj.id}`} >
                                                <div className='card-header'>
                                                    {obj.name}
                                                </div>
                                                <div className='card-body'>
                                                    <center>
                                                        <img src={obj.foto} className="w-50" />
                        
                                                    </center>
                                                </div>
                                                <div className='card-footer w-100'>
                                                    precio : $ {obj.price}
                                                    <br></br>
                                                    stock: {obj.stock}
                                                </div>
                                                
                                            </Link>
                                           
                                            </div> )  }     
                        
                    
                    </div>
                </div>
                    
    
    )
}
// los eventos me disparan una nueva ejecución del componente donde se esta ejecutando 

export default ItemListContainer