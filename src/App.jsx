import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "./Context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                titulo="Full Padel Shop"
                subtitulo="Bienvenido a Full Padel"
              />
            }
          />
          <Route
            path="/categoria/:categoriaId"
            element={
              <ItemListContainer
                titulo="Full Padel Shop"
                subtitulo="Bienvenido a Full Padel"
              />
            }
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
