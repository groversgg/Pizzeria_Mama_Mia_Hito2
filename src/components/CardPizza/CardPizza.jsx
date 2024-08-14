// CardPizza.jsx
import React from 'react';
import { formatNumber } from '../../assets/js/utils';
import './cardpizza.css'

const CardPizza = (props) => {
  return (
    <div className="card h-100" >
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <hr />
        <p className="card-text">
          <strong><h5>Ingredientes:</h5></strong> {" "}
          {props.ingredients.join(", ")}
        </p>
        <hr />
        <p className="card-text">
          <h4>Precio: ${formatNumber(props.price)} </h4>
        </p>
        <div className="mt-auto d-flex justify-content-around gap-2">
          <a href="#" className="btn btn-outline-success col-5">
          <i className="fa-solid fa-eye"></i> Ver mas
          </a>
          <a href="#" className="btn btn-outline-success col-5">
          <i className="fa-solid fa-cart-shopping"></i> Añadir
          </a>
        </div>

      </div>
    </div>
  );
}

export default CardPizza;

