import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();

function FormsCart() {
  const valorInitial = {
    name: "",
    surname: "",
    inputEmail: "",
    inputAddress: "",
    inputAddress2: "",
    inputCity: "",
    inputState: "",
    inputZip: "",
  };

  const [user, setUser] = useState(valorInitial);

  const captureInputs = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "ordenes"), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }

    setUser({ ...valorInitial });
  };

  return (
    <form onSubmit={saveData}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputname">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresa tu Nombre"
            onChange={captureInputs}
            value={user.name}
          />
        </div>
        <div className="form-group col-md-6">
          <label for="surname">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Ingresa tu Apellido"
            onChange={captureInputs}
            value={user.surname}
          />
        </div>

        <div className="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Ingresa tu email"
            onChange={captureInputs}
            value={user.inputEmail}
          />
        </div>
      </div>

      <div className="form-group">
        <label for="inputAddress">Direccion</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Calle falsa 123"
          onChange={captureInputs}
          value={user.inputAddress}
        />
      </div>
      <div className="form-group">
        <label for="inputAddress2">Entre Calles</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Entre Maradona y Messi"
          onChange={captureInputs}
          value={user.inputAddress2}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">Ciudad</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            onChange={captureInputs}
            value={user.inputCity}
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputState">Barrio</label>
          <input
            type="text"
            className="form-control"
            id="inputState"
            onChange={captureInputs}
            value={user.inputState}
          />
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Codigo Postal</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            onChange={captureInputs}
            value={user.inputZip}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button className="btn btn-primary">Generar Orden</button>
    </form>
  );
}

export default FormsCart;
