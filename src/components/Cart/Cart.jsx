import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, totalPrice] = useCartContext();

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
      <span>TOTAL: $ {totalPrice}</span>
    </>
  );
};

export default Cart;
