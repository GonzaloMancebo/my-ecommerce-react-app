import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartProvider";
import FormsCart from "../../Forms/FormsCart";
import CartItem from "./CartItem";
import "../Cart/CartItem.css";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cart_vacio">
          <p>No hay articulos en el carrito 😨</p>
          <br />
          <br />
          <br />
          <Link className="cart_compra" to="/">
            Hace click para iniciar tu compra!
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <FormsCart />
      <br/>
      <p className="total_parrafo">TOTAL: $ {totalPrice()}</p>
    </>
  );
};

export default Cart;
