import shoppingCartImage from "../assets/undraw_add-to-cart_vx87.svg";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold text-indigo-800">
        Welcome to Our Shop!
      </h2>
      <p className="text-gray-600 max-w-md text-center">
        Browse our shop for a curated selection of products, add your favorites
        to the cart, and check out whenever you're ready.
      </p>
      <div className="w-full max-w-4xl">
        <img
          className="w-full"
          src={shoppingCartImage}
          alt="Shopping Cart Background Image"
        />
      </div>
    </div>
  );
}
export default Home;
