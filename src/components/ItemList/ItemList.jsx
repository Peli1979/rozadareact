import { Link } from "react-router-dom"
import Item from "../Item/Item"
import './ItemList.css'



const ItemList = ({products}) => {
  return (
   
   
      products.map( prod => <Item key={prod.id} prod={prod} />  )
     
  )
}

export default ItemList
