"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl ml-2 font-bold w-full pt-4">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </div>
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          <MealIdeas />
        </div>
      </div>
    </main>
  );
}
