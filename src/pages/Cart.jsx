import { useOutletContext } from "react-router";

function Cart() {
  const { input } = useOutletContext();

  const itemsInCart = Object.entries(input).filter(([key, val]) => val >= 1);
  console.log(itemsInCart);

  return (
    <div>
      <h2 className="text-center mb-4 text-3xl font-bold text-indigo-800">
        Items in Your Cart:
      </h2>
      <div className="mx-auto w-1/3 min-h-40 rounded-xl bg-indigo-600">
        {itemsInCart.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-40">
            <p className="font-bold text-indigo-100 p-2">
              Nothing to display in your Cart at the moment.
            </p>
          </div>
        ) : (
          itemsInCart.map(([key, val]) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center p-2 gap-2 border-b-2 border-indigo-200 last:border-b-0"
            >
              <p className="font-bold text-indigo-100">
                {key}: {val}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Cart;
