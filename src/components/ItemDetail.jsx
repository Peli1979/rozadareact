import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { gFetch } from '../utils/gFetch'

const ItemDetail = () => {

    const [products, setProducts] = useState([])
    const {productId} =useParams()

    useEffect(()=> {
        if (productId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.id === productId)))    
            .catch(err => console.log(err))
            
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            
        }
        
        
    }, [productId])

    
    console.log(productId)

    // [1,2,3] => [<li>1</li>, <li>2</li>,<li>3</li>]

    return (

        
            <div >
                <h1>Paletas de Padel</h1>  
                    {/* <button onClick={cambiarEstado}>cambiar estado</button>    */}
                    
                    <div className='cards container ml-2' >
                       

                    { products.map( obj =>  <div key={obj.id} className= 'card w-25 p-3'>
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
                                                    precio : {obj.price}
                                                </div>
                                            </Link>
                                            </div> )  }     
                        
                    
                    </div>
                </div>
                    
    
    )
}


export default ItemDetail
