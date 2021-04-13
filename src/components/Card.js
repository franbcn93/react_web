import React, { Component, Fragment } from "react";
import "../style/Card.css";
import { hospitales } from "../hospitales.json";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      hospitales,
    };
  }

  render() {
    const listado = this.state.hospitales.map((todo, i) => {
      return (
        <Fragment>
          <div className="card mt-3 alignDivCard" key={i}>
            <div className="mt-3">
              <h3>{todo.nombre}</h3>
              <span className="badge bg-secondary">{todo.comarca}</span>
              <p className="margenP">{todo.habitaciones}</p>
              <img className="imgCard" src={todo.imagen} width="30%" />

              {/* {/* <img src="/home/paco/JavaScript/web/web_tnk/public/logo192.png" /> */}
              {/* <img src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890084/imgVHB_ldt8dy.png"></img> */}
            </div>
          </div>
        </Fragment>
      );
    });

    return (
      <Fragment>
        {/* <h1>Hola</h1>
        <div class="container divCard">
          <div class="row">
            <div class="col-4">
              <div className="lista_hospitales ">{listado}</div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="container">
            <div className="row divCard">
              <div className="lista_hospitales ">{listado}</div>
              <div></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
