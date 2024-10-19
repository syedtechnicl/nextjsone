"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemovetoCart } from "../Redux/createSlice";

const Cart = () => {
  const maindd = useSelector((dd) => dd.cart);
  const dispatch = useDispatch();

  const Remove = (elem) => {
    dispatch(RemovetoCart(elem));
  };

  return (
    <div>
      <div className="card-container">
        {maindd.map((elem, index) => (
          <div className="card" key={index}>
            <img src={elem.image} alt={elem.title} className="card-img" />
            <div className="card-content">
              <b className="card-price">${elem.price}</b>
              <h3 className="card-title">{elem.title}</h3>
              <h5 className="card-description">{elem.description}</h5>
              <button
                onClick={() => {
                  Remove(elem.id);
                }}
                className="btn"
              >
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
