import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const files = [
  {
    id: 1,
    image:
      "https://www.tradeinn.com/f/13887/138875097/nike-guantes-tg-club-fleece-2.0-printed.jpg",
    title: "Guantes Nike",
    category: "Uppergarment",
    price: "10.100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 2,
    image:
      "https://www.tradeinn.com/f/13847/138479794/nike-zapatillas-running-revolution-6-nn.jpg",
    title: "Zapatillas Nike",
    category: "Lowergarment",
    price: "26.199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 3,
    image:
      "https://www.tradeinn.com/f/13748/137483200/nike-camiseta-manga-corta-dri-fit-miler.jpg",
    title: "Remera Nike",
    category: "Uppergarment",
    price: "10.199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 4,
    image:
      "https://www.tradeinn.com/f/13871/138712842/nike-chaqueta-eintracht-frankfurt-awf-22-23.jpg",
    title: "Campera Nike",
    category: "Uppergarment",
    price: "18.099",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 5,
    image:
      "https://www.tradeinn.com/h/13748/137483178/nike-calcetines-multiplier-crew-2-pares.jpg",
    title: "Medias Nike",
    category: "Lowergarment",
    price: "4.199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 6,
    image:
      "https://www.tradeinn.com/f/13870/138706923/nike-pantalones-cortos-dri-fit-stride-5.jpg",
    title: "Short Nike",
    category: "Lowergarment",
    price: "12.499",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 7,
    image:
      "https://www.tradeinn.com/f/13883/138839377/nike-botas-futbol-tiempo-legend-ix-pro-fg.jpg",
    title: "Botines Nike",
    category: "Lowergarment",
    price: "104.399",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 8,
    image:
      "https://www.tradeinn.com/f/13871/138712812/nike-polo-manga-corta-paris-saint-germain-nsw-22-23.jpg",
    title: "Camiseta Nike",
    category: "Uppergarment",
    price: "20.199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(files);
      }, 2000);
    });

    getData.then((res) =>
      setData(res.find((File) => File.id === parseInt(detalleId)))
    );
  }, []);

  return <ItemDetail data={data} />;
}

export default ItemDetailContainer;
