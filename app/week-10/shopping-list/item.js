export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="border border-blue-950 bg-blue-950 w-full max-w-sm m-2 p-2 cursor-pointer"
      onClick={onSelect}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
