import { useOutletContext } from "react-router";

function Cart() {
  const { input, setInput } = useOutletContext();

  const itemsInCart = Object.entries(input).filter(([key, val]) => val >= 1);

  function handleIncrement(e) {
    const { id } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  }

  function handleDecrement(e) {
    const { id } = e.target;
    setInput((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : prev[id],
    }));
  }

  return (
    <>
      <h2 className="text-center mb-4 text-3xl font-bold text-indigo-800">
        Items in Your Cart:
      </h2>
      <div className="mx-auto w-1/3 min-h-40 rounded-xl bg-indigo-600">
        {itemsInCart.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-40">
            <p
              data-testid="nothing-to-display"
              className="font-bold text-indigo-100 p-2"
            >
              Nothing to display in your Cart at the moment.
            </p>
          </div>
        ) : (
          itemsInCart.map(([key, val]) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center p-2 gap-2 border-b-2 border-indigo-200 last:border-b-0"
            >
              <p
                data-testid="display-products"
                className="font-bold text-indigo-100"
              >
                {key}: {val}
                <button
                  data-testid="increment"
                  id={key}
                  onClick={handleIncrement}
                  className="mx-2 w-6 h-6 rounded-lg bg-lime-400 hover:bg-lime-500 cursor-pointer"
                >
                  +
                </button>
                <button
                  data-testid="decrement"
                  id={key}
                  onClick={handleDecrement}
                  className="w-6 h-6  bg-red-400 hover:bg-red-500 cursor-pointer"
                >
                  -
                </button>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default Cart;
