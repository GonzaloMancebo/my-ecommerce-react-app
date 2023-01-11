import React from "react";
import Item from "../CardItem/Item";

function ItemList ({data = []}) {
  return data.map((film) => <Item key={film.id} info ={film} />);
}

export default ItemList;
