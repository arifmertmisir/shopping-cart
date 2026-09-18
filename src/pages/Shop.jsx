import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Shop() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(productList);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold text-indigo-800">
          Discover Our Products
        </h2>

        <div className="flex justify-center flex-wrap gap-8">
          {productList.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Shop;
