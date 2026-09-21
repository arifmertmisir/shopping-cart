import { useOutletContext } from "react-router";

function Cart() {
  const { input, setInput } = useOutletContext();

  const itemsInCart = Object.entries(input).filter(([key, val]) => val >= 1);
  console.log(itemsInCart);

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
                <button
                  id={key}
                  onClick={handleIncrement}
                  className="mx-2 rounded-lg p-1 bg-lime-400 hover:bg-lime-500 cursor-pointer"
                >
                  +
                </button>
                <button
                  id={key}
                  onClick={handleDecrement}
                  className="rounded-lg p-1.25 bg-red-400 hover:bg-red-500 cursor-pointer"
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
