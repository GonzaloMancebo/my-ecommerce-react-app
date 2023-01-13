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
          <h2 className="title_detalle font-weight-bold">{data.title}</h2>
          <hr />

          <p className="parrafo_detalle"> " {data.description} "</p>
          <br />
          <p className="parrafo_price font-weight-bold">  $ {data.price} </p>
          <br/>
          <br/>
          {goToCart ? (
            
            <Link to="/cart" className="parrafo_click">Hace click para generar tu compra!</Link>
            
          ) : (
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
