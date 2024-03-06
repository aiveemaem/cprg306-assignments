"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name"); // Add sortBy state variable

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main>
      <div className="mt-8">
        <label htmlFor="sort" className="ml-2">
          Sort by:
        </label>
        <button
          onClick={() => setSortBy("name")}
          className={`p-1 m-2 w-28 text-black rounded-sm ${
            sortBy === "name" ? "bg-pink-500" : "bg-pink-300"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-1 m-2 w-28 text-black rounded-sm ${
            sortBy === "category" ? "bg-pink-500" : "bg-pink-300"
          }`}
        >
          Category
        </button>

        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Item
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
