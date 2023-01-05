import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../assets/img/shared/logo.svg";
import menuHamburguer from "../../assets/img/shared/icon-hamburger.svg";

import "./index.scss";

const Navbar = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

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
        <button type="button" onClick={() => setMenuMobileOpen(true)}>
          <img src={menuHamburguer} alt="Menu" />
        </button>
      </div>
      {menuMobileOpen ? (
        <div className="navbarMobile w-3/4 absolute h-screen lg:hidden top-0 right-0 bg-white/20 backdrop-blur-xl">
          <div className="flex justify-end mt-2 mx-1.5">
            <button type="button" onClick={() => setMenuMobileOpen(false)}>
              <AiOutlineClose className="top-1 w-7 h-7 text-[#D0D6F9]" />
            </button>
          </div>

          <div className="px-5 flex flex-col gap-y-5 mt-12">
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
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
