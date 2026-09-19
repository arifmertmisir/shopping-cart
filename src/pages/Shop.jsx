import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Shop() {
  const [productList, setProductList] = useState([]);
  const [input, setInput] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleInputOnChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleIncrement(e) {
    const { id } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: (Number(prev[id]) || 0) + 1,
    }));
    console.log(input);
  }

  function handleDecrement(e) {
    const { id } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: Number(prev[id]) > 0 ? Number(prev[id]) - 1 : Number(prev[id]) || 0,
    }));
  }

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
              id={product.title}
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              itemAmount={input[product.title]}
              handleItemAmountOnChange={handleInputOnChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Shop;
