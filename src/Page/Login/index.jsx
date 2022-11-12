import React, { useState } from "react";
import "./index.scss";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import Menu from "../../Component/Menu";
import Footer from "../../Component/Footer";

function Login() {
  const [user, setUser] = useState({ type: "user", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("invalid", () => {
        document.forms[0].classList.add("is-invalid");
      });
      input.addEventListener("valid", () => {
        document.forms[0].classList.add("is-valid");
      });
    });
    console.log(user);
  };

  return (
    <div>
      <Menu />
      <h1 className="text-center p-4">로그인</h1>
      <div className="box">
        <div className="container login">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-100 row m-0 mb-3">
              <div className="col-6 p-0">
                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="user"
                  value="user"
                  onChange={handleChange}
                  checked={user.type === "user"}
                />
                <label
                  className="btn btn-lg btn-radio left btn-outline-dark w-100"
                  htmlFor="user"
                >
                  개인
                </label>
              </div>
              <div className="col-6 p-0">
                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="store"
                  value="store"
                  onChange={handleChange}
                  checked={user.type === "store"}
                />
                <label
                  className="btn btn-lg btn-radio right btn-outline-dark w-100"
                  htmlFor="store"
                >
                  사업주
                </label>
              </div>
            </div>
            <input
              className="form-control form-control-login"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요."
              required
            />
            <input
              className="form-control form-control-login"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
              required
            />
            <div className="py-4">
              <input
                type="button"
                onClick={handleSubmit}
                className="d-flex justify-content-center btn btn-login btn-dark w-100"
                value="LOGIN"
              />
              <div className="bottom">
                <b>아이디가 없다면?</b>
                <Link to="/signup" className="text-decoration-none">
                  <div className="d-flex justify-content-center btn btn-login btn-outline-dark w-100">
                    회원가입하기
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
