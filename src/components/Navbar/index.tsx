import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/img/shared/logo.svg";
import menuHamburguer from "../../assets/img/shared/icon-hamburger.svg";

import "./index.scss";

const Navbar = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "Destination", url: "/explore" },
    { text: "Crew", url: "/crew" },
    { text: "Technology", url: "/technology" },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-5 md:pr-0">
      <Link to="/">
        <img src={logo} alt="Logo website" />
      </Link>
      <div className="navbarGradient hidden md:flex gap-8 bg-[#252932] px-28 py-8 md:px-16 lg:px-28">
        {links.map((link, idx) => (
          <NavLink
            to={link.url}
            key={link.text}
            className={({ isActive }) =>
              `${
                isActive ? "activeLink" : ""
              } flex gap-1 pb-1 text-xl uppercase tracking-widest`
            }
          >
            <span className="font-bold mr-1 text-white block md:hidden lg:block">
              {String(idx + 1).padStart(2, "0")}
            </span>{" "}
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className="block md:hidden">
        <button type="button">
          <img src={menuHamburguer} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
