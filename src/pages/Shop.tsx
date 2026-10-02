import { useEffect } from "react";
import Card from "../components/Card";
import { useOutletContext } from "react-router";
import type { JSX } from "react";
import type { Product } from "../types/Product"
import type { CartContextType } from "../types/CartContextType";

type ShopContextType = CartContextType & 
                { setProductList: React.Dispatch<React.SetStateAction<Product[]>>; }

function Shop():JSX.Element {
  const { productList, setProductList, input, setInput }
                           = useOutletContext<ShopContextType>();


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleInputOnChange(e:React.ChangeEvent<HTMLInputElement>):void {
    const { name, value } = e.target;
    setInput((prev:Record<string, number>):Record<string, number> => ({ ...prev, [name]: Number(value) }));
  }

  function handleIncrement(e:React.MouseEvent<HTMLButtonElement>):void {
    const { id } = e.currentTarget;
    setInput((prev:Record<string, number>):Record<string, number> => ({
      ...prev,
      [id]: (Number(prev[id]) || 0) + 1,
    }));
  }

  function handleDecrement(e:React.MouseEvent<HTMLButtonElement>):void {
    const { id } = e.currentTarget;
    setInput((prev:Record<string, number>):Record<string, number> => ({
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
