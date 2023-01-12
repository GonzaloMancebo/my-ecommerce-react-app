import React, { useState } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartProvider";

function ItemDetail({ data }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };
  return (
    <div className="container">
      <div className="detail">
        <img className="detail_image" src={data.image} alt="" />
        <div className="content">
          <h2>{data.title}</h2>
          <hr />

          <p> " {data.description} "</p>
          <br />
          <p> $ {data.price}</p>

          {goToCart ? (
            <Link to="/cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
