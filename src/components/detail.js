import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
export default function Detail() {
  const { target, detail, setDetail, visable, setVisable } =
    useContext(ThemeContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${target}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [target]);

  function closepage() {
    setVisable(false);
  }
  let slikice;
  
  function left() {
    if (0 < count) {
      setCount((prev) => prev - 1);
    }
  }
  function right() {
    if (count <= detail.images.length - 2) {
      setCount((prev) => prev + 1);
    }
  }
  let { images } = detail;
  if (detail.images) {
    slikice = images.map((item, index) => (
      <img className="smallimg" src={item} key={index} alt="" />
    ));
  }

  return (
    <div className="detail">
      <div
        className="detailpage"
        style={{ display: visable ? "flex" : "none" }}
      >
        <div>
          <h1>{detail.title}</h1>
        </div>
        <div className="imgcontainer">
          <button onClick={left}>Prev</button>
          {detail.images ? (
            <img className="detailimg" src={detail.images[count]} alt="" />
          ) : null}
          <button onClick={right}>Next</button>
        </div>
        <div className="detailcontainer">{detail.images ? slikice : null}</div>
        <div className="info">
          <div>Brand:{detail.brand}</div>
          <div>{detail.description}</div>
          <div>Price:{detail.price}$</div>
          <div>Rating:{detail.rating}</div>
          <div>Stock:{detail.stock}</div>
        </div>
        <button className="btn" onClick={closepage}>
          Back
        </button>
      </div>
    </div>
  );
}
