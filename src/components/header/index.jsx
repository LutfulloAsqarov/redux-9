import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo.webp";
import { FaBell } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Header = ({ search, setSearch }) => {
    return (
        <header id="header">
            <div className="container header">
                <div className="header__logo">
                    <img src={logo} alt="logo" /> <span>YouTube</span>
                </div>
                <form className="header__form" action="">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <label htmlFor="search">
                        <IoIosSearch />
                    </label>
                </form>
                <div className="header__icons">
                    <FaBell />
                    <BsCameraVideoFill />
                    <FaUserCircle />
                </div>
            </div>
        </header>
    );
};

export default Header;
