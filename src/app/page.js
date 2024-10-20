"use client";
import React from "react";
import "../styles/Card.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddtoCart } from "./Redux/createSlice";

const page = () => {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();

  const Add = (elem) => {
    dispatch(AddtoCart(elem));
  };

  useEffect(() => {
    const maindata = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const data2 = await data.json();
      setdata(data2);
    };
    maindata();
  }, []);

  return (
    <div>
      <div className="card-container">
        {data.map((elem, index) => (
          <div className="card" key={index}>
            <img src={elem.image} alt={elem.title} className="card-img" />
            <div className="card-content">
              <b className="card-price">${elem.price}</b>
              <h3 className="card-title">{elem.title}</h3>
              <h5 className="card-description">{elem.description}</h5>
              <button
                onClick={() => {
                  Add(elem);
                }}
                className="btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
