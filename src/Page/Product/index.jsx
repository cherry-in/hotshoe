import React from "react";
import Footer from "../../Component/Footer";
import Menu from "../../Component/Menu";
import "./index.scss";
import camera from "../../Images/camera.png";

const name = "Canon EoS Rebel T7 18-55m 번들 세트";
const price = "20,000원"

function Product() {
  const handleClick = async () => {};

  return (
    <div className="d-flex flex-column h-100 justify-content-between">
      <div>
        <Menu />
        <div className="mt-5">
          <div className="row justify-content-around">
            <div className="col-5">
              <img src={camera} alt="camera" />
            </div>
            <div className="col-5">
              <div className="p-1">언더독렌탈</div>
              <div className="h1">{name}</div>
              <div className="w-100 text-end my-5 h2">
                <b>{price}</b> <small>/1일</small>
              </div>
              <div className="d-flex justify-content-around">
                <div className="col-5">
                  <label>대여 시작일</label>
                  <input type="date" className="form-control" name="start" />
                </div>
                <div className="col-5">
                  <label>대여 종료일</label>
                  <input type="date" className="form-control" name="end" />
                </div>
              </div>
              <div className="btn btn-lg btn-dark w-100 my-3" onClick={handleClick}>
                예약하기
              </div>
            </div>
          </div>
          <div>text</div>
          <div>review</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
