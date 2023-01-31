import React, { useState } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [target, setTarget] = useState();
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({});
  const [visable, setVisable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ThemeContext.Provider
      value={{
        products,
        setProducts,
        target,
        setTarget,
        detail,
        setDetail,
        visable,
        setVisable,
        currentPage,
        setCurrentPage,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider, ThemeContext };
