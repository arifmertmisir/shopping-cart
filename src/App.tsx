import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";

type Product = {
  id:number,
  title:string,
  price:number,
  description:string,
  image:string
}

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [input, setInput] = useState<Record<string, number>>({});
  const itemsInCart:[string,number][] = Object.entries(input).filter(([key, val]) => val >= 1);

  return (
    <>
      <Navbar itemsCount={itemsInCart.length} />
      <Outlet context={{ input, setInput, productList, setProductList }} />
    </>
  );
}

export default App;
