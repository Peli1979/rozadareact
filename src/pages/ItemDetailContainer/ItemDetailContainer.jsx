import ItemDetail from "../../components/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {productId} =useParams()
    
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer
