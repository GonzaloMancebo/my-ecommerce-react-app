import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./CartContext/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
