import React, { useState } from "react";
import "./index.scss";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import Menu from "../../Component/Menu";
import Footer from "../../Component/Footer";

function SignUp() {
  const [user, setUser] = useState({
    type: "user",
    email: "",
    Pw: "",
    Pw2: "",
    nickName: "",
    phone_number: "",
    officeName: "",
    officeNumber: "",
    address: "",
  });

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
      <h1 className="text-center p-4">회원가입</h1>
      <div className="box-signup">
        <div className="container login">
          <div className="logo py-2 mt-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-center h5 my-4">핫슈에 오신 걸 환영해요!</div>
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
            <label for="email" className="form-label">
              이메일
            </label>
            <input
              className="form-control form-control-login"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요."
              required
            />
            <label for="Pw" className="form-label">
              비밀번호
            </label>
            <input
              className="form-control form-control-login"
              type="Pw"
              id="Pw"
              name="Pw"
              value={user.Pw}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
              required
            />
            <label for="Pw2" className="form-label">
              비밀번호 확인
            </label>
            <input
              className="form-control form-control-login"
              type="Pw"
              id="Pw2"
              name="Pw2"
              value={user.Pw2}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
              required
            />
            <label for="phone_number" className="form-label">
              전화번호
            </label>
            <input
              className="form-control form-control-login"
              type="text"
              id="phone_number"
              name="phone_number"
              value={user.phone_number}
              onChange={handleChange}
              placeholder="전화번호를 입력해주세요."
              required
            />
            <hr className="mt-5" />
            {user.type === "user" ? (
              <>
                <label for="nickName" className="form-label">
                  닉네임
                </label>
                <input
                  className="form-control form-control-login"
                  type="text"
                  id="nickName"
                  name="nickName"
                  value={user.nickName}
                  onChange={handleChange}
                  placeholder="닉네임을 입력해주세요."
                  required
                />
              </>
            ) : (
              <>
                <label for="officeName" className="form-label">
                  회사명
                </label>
                <input
                  className="form-control form-control-login"
                  type="text"
                  id="officeName"
                  name="officeName"
                  value={user.officeName}
                  onChange={handleChange}
                  placeholder="회사명을 입력해주세요."
                  required
                />
                <label for="officeNumber" className="form-label">
                  사업자 등록번호
                </label>
                <input
                  className="form-control form-control-login"
                  type="text"
                  id="officeNumber"
                  name="officeNumber"
                  value={user.officeNumber}
                  onChange={handleChange}
                  placeholder="사업자 등록번호를 입력해주세요."
                  required
                />
                <label for="address" className="form-label">
                  주소
                </label>
                <input
                  className="form-control form-control-login"
                  type="text"
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="주소를 입력해주세요."
                  required
                />
              </>
            )}
            <div className="py-4">
              <input
                type="button"
                onClick={handleSubmit}
                className="d-flex justify-content-center btn btn-login btn-dark w-100"
                value="가입하기"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
