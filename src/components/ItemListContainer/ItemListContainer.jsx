import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();

    const getData = async () => {
      const queryRef = !categoriaId
        ? collection(dbFirestore, "Productos")
        : query(
            collection(dbFirestore, "Productos"),
            where("categoria", "==", categoriaId)
          );

      const response = await getDocs(queryRef);

      const productos = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };

        return newProduct;
      });
      setTimeout(() => {
        setProducts(productos);
        setLoading(false);
      }, 2000);
    };

    getData();
  }, [categoriaId]);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div className="background">
      <h1 className="bien">Bienvenidos a Full Padel Shop!!</h1>

      <div className="cards container ml-5">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
