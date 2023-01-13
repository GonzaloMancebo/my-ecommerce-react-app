import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../Card/CardList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const coleccionProductos = categoriaId
      ? query(collection(db, "productos"), where("category", "==", categoriaId))
      : collection(db, "productos");
    getDocs(coleccionProductos)
      .then((result) => {
        const lista = result.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setData(lista);
      })
      .catch((error) => console.log(error));
  }, [categoriaId]);
  return (
    <>
      <h1 >Nike Factory</h1>
      <br/>
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
