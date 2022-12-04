import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducto = async () => {
      const dbFirestore = getFirestore();
      const queryRef = doc(dbFirestore, "Productos", productId);
      const response = await getDoc(queryRef);
      const newItem = {
        id: response.id,
        ...response.data(),
      };
      setTimeout(() => {
        setItem(newItem);
        setLoading(false);
      }, 2000);
    };
    getProducto();
  }, [productId]);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
