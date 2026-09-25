import { useEffect } from "react";
import Card from "../components/Card";
import { useOutletContext } from "react-router";

function Shop() {
  const { productList, setProductList, input, setInput } = useOutletContext();

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
  }

  function handleDecrement(e) {
    const { id } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: Number(prev[id]) > 0 ? Number(prev[id]) - 1 : Number(prev[id]) || 0,
    }));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold text-indigo-800">
        Discover Our Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 px-2">
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
  );
}
export default Shop;
