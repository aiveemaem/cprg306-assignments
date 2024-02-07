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
          className={`bg-${
            sortBy === "name" ? "pink-500" : "pink-300"
          } p-1 m-2 w-20 text-black hover:bg-pink-500 rounded-sm`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`bg-${
            sortBy === "category" ? "pink-500" : "pink-300"
          } p-1 m-2 w-20 text-black hover:bg-pink-500 rounded-sm`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("groupCategory")}
          className={`bg-${
            sortBy === "groupCategory" ? "pink-500" : "pink-300"
          } p-1 m-2 w-25 text-black hover:bg-pink-500 rounded-sm`}
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
