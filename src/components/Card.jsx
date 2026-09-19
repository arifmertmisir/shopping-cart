function Card({
  title,
  image,
  description,
  itemAmount,
  handleItemAmountOnChange,
  handleIncrement,
  handleDecrement,
  //handleAddToCart,
  price,
}) {
  const displayAmount = isNaN(itemAmount) ? 0 : itemAmount;
  return (
    <div className="w-60 text-center font-medium shadow-[0px_10px_20px_rgba(0,0,1,1)] rounded-xl bg-indigo-600 cursor-pointer duration-300 transition-transform hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0px_20px_80px_rgba(255,203,5,0.4)] hover:bg-indigo-400">
      <h2 className="p-2 font-bold text-indigo-100">{title}</h2>

      <img
        className="w-full h-48 object-contain hover:brightness-110 hover:drop-shadow-[0px_0px_10px_white]"
        src={image}
        alt={description}
      />
      <p className="p-2 font-bold text-indigo-100">{`€` + price}</p>
      <input
        name={title}
        value={itemAmount}
        onChange={handleItemAmountOnChange}
        className="text-sm text-center p-2 mb-4 border-solid rounded-xl text-indigo-100 bg-indigo-900"
        type="number"
        placeholder="How many items ?"
      />
      <div className="flex justify-between p-2 mb-4 border-solid rounded-xl bg-indigo-100">
        <button
          id={title}
          onClick={handleIncrement}
          className="hover:bg-lime-500 cursor-pointer"
        >
          +
        </button>
        <p>{displayAmount}</p>
        <button
          id={title}
          onClick={handleDecrement}
          className="hover:bg-red-600 cursor-pointer"
        >
          -
        </button>
      </div>
      <button
        //onClick={handleAddToCart}
        className="p-2 mb-4 border-solid rounded-xl text-indigo-100 bg-indigo-900 hover:bg-lime-500 cursor-pointer"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
