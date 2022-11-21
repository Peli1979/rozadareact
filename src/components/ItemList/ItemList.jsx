import { Link } from "react-router-dom"
import './ItemList.css'



const ItemList = ({products}) => {
  return (
    <div>
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
                                           
                                            </div> )}
    </div>
  )
}

export default ItemList
