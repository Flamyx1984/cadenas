import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { ThemeContext } from "./components/themeContext";
import Pagination from "./components/pagination";
import Detail from "./components/detail";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const {
    setTarget,
    setVisable,
    currentPage,
    setCurrentPage,
  } = useContext(ThemeContext);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentItems = products.slice(firstPostIndex, lastPostIndex);

  const productsElement = currentItems.map((item) => (
    <div key={item.id} index={item.id}>
      <div>{item.title}</div>
      <img
        onClick={(e) => handleClick(e)}
        index={item.id}
        className="image"
        src={item.images[0]}
        alt=""
      />
    </div>
  ));
  function handleClick(e) {
    e.preventDefault();
    setTarget(e.target.attributes.index.value);
    setVisable(true);
  }

  return (
    <div className="App">
      {productsElement}
      <div className="pagination">
        <Pagination
          totalPosts={products.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Detail />
    </div>
  );
}

export default App;
