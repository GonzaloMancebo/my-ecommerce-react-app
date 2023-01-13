import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../Card/CardList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryColletion = collection(querydb, "productos");

    if (categoriaId) {
      const queryFilter = query(
        queryColletion,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryColletion)
      .then(res =>
        setData(
          res.docs.map((product => ({ id: product.id, ...product.data() })))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <h1>ACA VA EL TITULO</h1>
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
