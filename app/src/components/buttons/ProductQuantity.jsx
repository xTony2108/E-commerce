export const ProductQuantity = ({ add, show, remove, quantity }) => {
  return (
    <div className="flex items-center gap-1">
      <button
        className="text-white text-center text-lg border border-border h-10 w-12 rounded-lg outline-none"
        onClick={remove}
      >
        -
      </button>
      <input
        className="text-white text-center text-lg border border-border h-10 w-12 rounded-lg bg-transparent outline-none "
        type="number"
        value={quantity}
        onChange={show}
      />
      <button
        className="text-white text-center text-lg border border-border h-10 w-12 rounded-lg outline-none"
        onClick={add}
      >
        +
      </button>
    </div>
  );
};
