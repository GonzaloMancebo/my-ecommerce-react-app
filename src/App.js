import "./App.css";
import React from "react";
import RoutesHome from "./Routes/RoutesHome";
import CartProvider from "./CartContext/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <RoutesHome />
      </CartProvider>
    </>
  );
}

export default App;
