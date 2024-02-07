"use client";

import { useState } from "react";
import itemsData from "./items.json";
import Item from "./item.js";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // Add sortBy state variable

  const sortedItems = itemsData.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "groupCategory") {
      return a.category.charAt(0).localeCompare(b.category.charAt(0));
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <main>
      <div>
        <label htmlFor="sort">Sort by:</label>
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
        <button
          onClick={() => setSortBy("groupCategory")}
          className={`p-1 m-2 w-25 text-black rounded-sm ${
            sortBy === "groupCategory" ? "bg-pink-500" : "bg-pink-300"
          }`}
        >
          Grouped Category
        </button>
        {console.log(groupedItems)}
        <ul>
          {sortBy === "groupCategory"
            ? Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <h2 className="text-xl capitalize mt-2">{category}</h2>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>
                        <Item
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : sortedItems.map((item) => (
                <li key={item.id}>
                  <Item
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                </li>
              ))}
        </ul>
      </div>
    </main>
  );
}
