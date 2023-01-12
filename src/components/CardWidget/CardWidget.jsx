import React from "react";
import { useCartContext } from "../../CartContext/CartProvider";

function CardWidget() {
  const { totalProducts } = useCartContext();


  return (
    <div>
      <i className="bi bi-cart2"></i>
      <span>{totalProducts() || ''}</span>
    </div>
  );
}

export default CardWidget;
