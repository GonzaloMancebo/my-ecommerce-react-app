import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Gonzalo",
      email: "Gonzalo@gmail.com",
      phone: "1234",
      address: "Calle falsa 123",
    },

    items: cart,
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersColletion = collection(db, "ordenes");
    addDoc(ordersColletion, order)
    .then (({id})=> console.log (id))
  };

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
      <button onClick={handleClick}>Generar Orden</button>
    </>
  );
};

export default Cart;
