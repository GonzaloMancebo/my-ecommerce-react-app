import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../CartContext/CartProvider";
import "../Forms/FormsCart.css";

function FormsCart() {
  const { cart, totalPrice } = useCartContext();
  const [user, setUser] = useState({});
  console.log(user);
  const captureInputs = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore();
      let orden = {
        user,
        cart: cart,
        date: new Date(),
        total: totalPrice(),
      };
      const res = await addDoc(collection(db, "ordenes"), orden);
      console.log(res.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={saveData}>
      <div>
        <div>
          <label for="inputname">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresa tu Nombre"
            onChange={captureInputs}
            name="name"
          />
        </div>
        <br />
        <div>
          <label for="surname">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Ingresa tu Apellido"
            onChange={captureInputs}
            name="surname"
          />
        </div>
        <br />
        <div>
          <label for="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Ingresa tu email"
            onChange={captureInputs}
            name="inputEmail"
          />
        </div>
      </div>
      <br />
      <div className="form-group">
        <label for="inputAddress">Direccion</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Calle falsa 123"
          onChange={captureInputs}
          name="inputAddress"
        />
      </div>
      <br />
      <div className="form-group">
        <label for="inputAddress2">Entre Calles</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Entre Maradona y Messi"
          onChange={captureInputs}
          name="inputAddress2"
        />
      </div>
      <br />
      <div className="form-row">
        <div>
          <label for="inputCity">Ciudad</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            onChange={captureInputs}
            name="inputCity"
          />
        </div>
        <br />
        <div>
          <label for="inputState">Barrio</label>
          <input
            type="text"
            className="form-control"
            id="inputState"
            onChange={captureInputs}
            name="inputState"
          />
        </div>
        <br />
        <div>
          <label for="inputZip">Codigo Postal</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            onChange={captureInputs}
            name="inputZip"
          />
        </div>
        <br />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <br />
      <button className="button" type="submit">
        Generar Orden
      </button>
    </form>
  );
}

export default FormsCart;
