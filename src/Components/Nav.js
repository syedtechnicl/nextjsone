"use client";
import React from "react";
import Link from "next/link";
import "../styles/Nav.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const maindd = useSelector((dd) => dd.cart);
  return (
    <>
      <div className="navbar">
        <span className="logo">From NextJs And Redux Toolkit</span>
        <div className="nav-links">
          <Link className="navLink" href="/">
            Home
          </Link>
          <Link className="navLink" href="/Cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: {maindd.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
