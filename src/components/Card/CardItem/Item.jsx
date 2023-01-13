import React from "react";
import "../CardItem/Item.css";
import { Link } from "react-router-dom";

function Item({ info }) {
  return (
    <>
      <Link to={`/detalle/${info.id}`} className="film">
        <div className="film_conteiner">
          <img width={300} height={306} src={info.image} alt={info.title} />
          <div>
            <p className="film_container_title">{info.title}</p>
            <br/>
            <p className="film_container_parrafo"> " {info.description} "</p>
            <br />
            <p className=" film_container_price">
              <strong> $ {info.price}</strong>
            </p>
            <hr/>

          </div>
          
        </div>
        
      </Link>
      
    </>
  );
}

export default Item;
