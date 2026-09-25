import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [input, setInput] = useState({});
  const itemsInCart = Object.entries(input).filter(([key, val]) => val >= 1);

  return (
    <>
      <Navbar itemsCount={itemsInCart.length} />
      <Outlet context={{ input, setInput, productList, setProductList }} />
    </>
  );
}

export default App;
