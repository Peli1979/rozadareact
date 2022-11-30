import ItemDetail from "../../components/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {productId} =useParams()
    const [item, setItem] = useState([]);
    
    useEffect(() => {
    const getProducto = async () => {
const dbFirestore = getFirestore()
      const queryRef = doc(dbFirestore , "Productos", productId);
      const response = await getDoc(queryRef);
      const newItem = {
        id: response.id,
        ...response.data(),
      };      setTimeout(()=>{
        setItem(newItem);
        setLoading(false)
      }, 2000)
    };
    getProducto();
  }, [productId]);
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer
