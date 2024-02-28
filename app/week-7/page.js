"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // const cleanItem = item.name.replace(/,.*/, '');
    let cleanItem;
    if (item.name.includes(",")) {
      cleanItem = item.name.replace(/,.*/, "");
    } else {
      // Regular expression to match emojis
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanItem = item.name.replace(regexEmoji, "");
    }
    setSelectedIngredient(cleanItem);
  };

  return (
    <main>
      <h1 className="text-3xl ml-2 font-bold w-full pt-4">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
        </div>
      </div>
    </main>
  );
}
