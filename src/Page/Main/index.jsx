import React, { useState } from "react";
import "./index.scss";
import Menu from "../../Component/Menu";
import Footer from "../../Component/Footer";
import main from "../../Images/main.png";
import mains from "../../Images/main.jpg";
import { Link } from "react-router-dom";
const products = [
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
  { img: "", name: "" },
];
function Main() {
  const [query, setQuery] = useState({ type: "camera", search: "", sort: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  return (
    <div className="d-flex flex-column h-100 justify-content-between">
      <div>
        <Menu />
        <div>
          <div>
            <img className="w-100 h-auto" src={main} alt="main" />
          </div>
          <div className="d-flex justify-content-around px-5 mx-5 center">
            <input
              type="radio"
              className="btn-check"
              name="type"
              id="camera"
              value="camera"
              checked={query.type === "camera"}
              onChange={handleChange}
            />
            <label
              className="btn rounded-pill btn-lg btn-outline-dark px-5"
              htmlFor="camera"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-camera"
                viewBox="0 0 24 24"
              >
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
              카메라
            </label>
            <input
              type="radio"
              className="btn-check"
              name="type"
              id="lense"
              value="lense"
              checked={query.type === "lense"}
              onChange={handleChange}
            />
            <label
              className="btn rounded-pill btn-lg btn-outline-dark px-5"
              htmlFor="lense"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-browser-chrome"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                />
              </svg>
              렌즈
            </label>
            <input
              type="radio"
              className="btn-check"
              name="type"
              id="accessory"
              value="accessory"
              checked={query.type === "accessory"}
              onChange={handleChange}
            />
            <label
              className="btn rounded-pill btn-lg btn-outline-dark px-5"
              htmlFor="accessory"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-webcam"
                viewBox="0 0 24 24"
              >
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a4.473 4.473 0 0 0 .268-.148 6.75 6.75 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Z" />
                <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
              악세서리
            </label>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <select className="form-select">
                <option value="latest">최근 등록 순</option>
              </select>
            </div>
            <div className="container py-3 row g-4">
              {products.map((item, i) => {
                return (
                  <div className="card col-3">
                    <img src={mains} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <Link to={`/product/${i}`}>
                        <p className="card-text">20,000원</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination text-dark">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
