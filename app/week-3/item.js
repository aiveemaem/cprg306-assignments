export default function Item({ name, quantity, category }) {
  return (
    <div className="border border-blue-950 bg-blue-950 w-full max-w-xs m-3 p-2">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
