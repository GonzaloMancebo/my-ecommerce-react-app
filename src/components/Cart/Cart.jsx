import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer:{
      name: "Gonzalo",
      email: "Gonzalo@gmail.com",
      phone: "1234",
      address: "Calle falsa 123"
    },
    
    items: cart,
    total: totalPrice(),
  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay articulos en el carrito</p>
        <Link to="/">Hacer compras mi rey</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p>TOTAL: $ {totalPrice()}</p>
      <button>Generar Orden</button>
    </>
  );
};

export default Cart;
