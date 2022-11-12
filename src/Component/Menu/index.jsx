import "./index.scss";
import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <div className="d-flex">
          <Link to="/" className="navbar-brand px-3 py-1">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="search input-group mb-0 input-icon">
            <input
              type="text"
              className="form-control bg-none h-100 mb-0"
              placeholder="원하는 장비 또는 업체를 검색해주세요!"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-search px-2"
              type="submit"
              id="button-addon2"
            >
              <span className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </span>
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link about pe-3">
                About HOTSHOE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                로그인
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
