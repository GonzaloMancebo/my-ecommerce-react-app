import React, { useState, useEffect } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({initial, stock, onAdd}) {
  const [count, SetCount] = useState(parseInt(initial));

  const descrease = () =>{
  SetCount (count-1);

  }

  const increase = () =>{
    SetCount (count+1);
  
    }
    useEffect (() =>{
      SetCount (parseInt(initial))
    },[initial])

  return (
    <div className="counter">
      <button disabled ={count <=1} onClick={descrease}>-</button>
      <span>{count}</span>
      <button disabled ={count >=stock} onClick={increase}>+</button>
      <div>
        <button disabled={stock<=0} onClick={() => onAdd (count)}>Agregar carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
