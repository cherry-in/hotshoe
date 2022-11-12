import React from "react";
import Footer from "../../Component/Footer";
import Menu from "../../Component/Menu";
import "./index.scss";
import camera from "../../Images/camera.png";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useParams } from "react-router-dom";
const clientKey = "test_ck_Z0RnYX2w532BPRwZBZK3NeyqApQE";

const name = "Canon EoS Rebel T7 18-55m 번들 세트";
const price = "20,000원";

function Product() {
  const { id } = useParams();
  const handleClick = async () => {
    const tossPayments = await loadTossPayments(clientKey);
    const code = tossPayments.requestPayment("카드", {
      amount: 35000,
      orderId: id + "asdfqasr",
      orderName: "상품명",
      customerName: "고객명",
      successUrl: "http://localhost:3000/",
      failUrl: "http://localhost:3000/error",
    });
    console.log(code);
  };

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
              <div
                className="btn btn-lg btn-dark w-100 my-3"
                onClick={handleClick}
              >
                예약하기
              </div>
            </div>
          </div>
          <div className="my-5 p-5 border-y">
            <div className="display-5">상세정보</div>
            <div className="my-4">
              캐논 스테디셀러 오막포와 새새아빠뺵통 조합입니다. <br />
              구성품 : 캐논 5Dmark4 1대, EF 70-200mm F2.8L IS III USM 렌즈 1개,
              캐논배터리 1개, 메모리카드 1장 (128gb) <br />
              추가배터리 및 메모리카드, 리더기는 추가결제로 구성 가능하십니다.{" "}
              <br />
              방문수령 / 반납, 퀵 거래시에는 1일 단위 대여 가능택배 거래 원할
              시에는 3일 이상 대여시에만 거래가 가능하십니다. <br />
              택배거래시 택배비는 고객님 부담입니다.
            </div>
            <div className="display-5">대여정보</div>
            <div className="my-4">
              최소 대여 : 1일 최대 대여 : 30일 수령 방법 : [직접,택배] 서울{" "}
              <br />
              용산구 한강대로 26 반납 방법 : [직접,택배] 서울 용산구 한강대로 26{" "}
              <br />
              잔여 수량 : 3 <br />
            </div>
          </div>
          <div className="p-5">
            <div className="h2">평가 및 리뷰</div>
            <div className="row p-3">
              <div className="display-5">15개 / 4.25</div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="col-2 px-2"></div>
              <div className="new-star d-flex mr-2 form-selectgroup-item">
                {[5, 4, 3, 2, 1].map((item, i) => {
                  return (
                    <input
                      className="d-none"
                      type="radio"
                      id={item + "stars"}
                      value={item}
                      name="star"
                    />
                  );
                })}
                {[5, 4, 3, 2, 1].map((item, i) => {
                  return (
                    <label
                      className="h1 mr-1"
                      ng-className="{true:'selected', false:''}[item == review.star]"
                      for={item + "stars"}
                    >
                      ★
                    </label>
                  );
                })}
              </div>
              <button
                className="btn btn-outline-primary btn-pill"
                
              >
                리뷰쓰기
              </button>
            </div>
            <label className="p-1" ng-if="app.info.installed">
              글자수:
            </label>
            <textarea
              className="form-control"
              data-bs-toggle="autosize"
              ng-if="app.info.installed"
              ng-model="review.text"
              placeholder="리뷰를 작성해주세요"
            ></textarea>
            <hr />

            {/*
          strong.h2 평가 및 리뷰
            .row.p-3
                .display-5 {{review.list.length}}개 / {{ app.info.star | number:1 }}
            .d-flex.justify-content-end(ng-if="app.info.installed")
                .col-2.px-2
                .new-star.d-flex.mr-2.form-selectgroup-item
                    input.form-selectgroup-input(ng-repeat="item in [5, 4, 3, 2, 1]" type="radio" id="{{ item }}-stars" value="{{ item }}" ng-model="review.star")
                    label.h1.mr-1(ng-repeat="item in [5, 4, 3, 2, 1]" ng-className="{true:'selected', false:''}[item == review.star]" for="{{ item }}-stars") ★
                button.btn.btn-outline-primary.btn-pill(ng-click="review.create()") 리뷰쓰기
            label.p-1(ng-if="app.info.installed") 글자수: {{review.text.length}}
            textarea.form-control(data-bs-toggle="autosize" ng-if="app.info.installed" ng-model="review.text" placeholder="리뷰를 작성해주세요")
            hr
            .d-flex.p-2(ng-repeat="item in review.list")
                .mr-2.avatar.btn-border-rounded(style="background-image: url('{{ item.user.icon }}')")
                .row
                    .col-auto
                        b {{ item.user.name }}
                        i.fa-regular.fa-circle-check.ml-2(ng-if="item.user.id == app.developer.user_id")
                        small.date-small.ml-2.text-muted {{ item.created }}
                    .col
                        small {{ "&#9733;".repeat(item.rate) }}
                    .col-12 {{ item.text }}
  */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
