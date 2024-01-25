import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold w-full max-w-xs m-1 p-1">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
