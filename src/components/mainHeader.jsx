import React, { useState } from "react";
import logo from "../assets/images/books.png";
import heart from "../assets/images/heart.png";
import read from "../assets/images/read.png";
import bookstore from "../assets/images/bookstore.png";
import searchBook from "../assets/images/searchBook.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="headerSearch">
          <a href="#" className="logoContainer">
            <img className="logo icons" src={logo} alt="BookStore Logo" /> BookStore
          </a>

          <form action="" className="searchForm">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <img className="searchBook icons" src={searchBook} alt="Search" />
          </form>

          <div className="iconsContainer">
            <a href="#" className="heartContainer">
              <img className="hearts icons" src={heart} alt="Favorites" />
            </a>
            <a href="#" className="heartContainer">
              <img className="hearts icons" src={bookstore} alt="Bookstore" />
            </a>
            <Link to="/signIn" className="readContainer">
              <img className="read icons" src={read} alt="Sign In" />
            </Link>
          </div>

          <div className="hamburgerMenu">
            <button onClick={toggleDropdown}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="dropdownMenu show">
            <form action="" className="searchForm">
              <input
                type="search"
                name=""
                placeholder="search here..."
                id="search-box"
              />
              <img className="searchBook icons" src={searchBook} alt="Search" />
            </form>

            <div className="iconsContainer">
              <a href="#" className="heartContainer">
                <img className="hearts icons" src={heart} alt="Favorites" />
              </a>
              <a href="#" className="heartContainer">
                <img className="hearts icons" src={bookstore} alt="Bookstore" />
              </a>
              <Link to="/signIn" className="readContainer">
                <img className="read icons" src={read} alt="Sign In" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default MainHeader;
