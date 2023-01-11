import React from "react";
import "../CardItem/Item.css";
import { Link } from "react-router-dom";
import CartProvider from "../../../CartContext/CartProvider";

function Item({ info }) {
  return (
    <>
      <Link to={`detalle/${info.id}`} className="film">
        <img src={info.image} alt="" />
        <p>{info.title}</p>
      </Link>
    </>
  );
}

export default Item;
