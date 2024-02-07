export default function Item({ name, quantity, category }) {
  return (
    <div className="border border-blue-950 bg-blue-950 w-full max-w-sm m-4 p-2">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
