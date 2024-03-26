"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const { user } = useUserAuth();

  async function loadItems() {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems([...items, { id: id, ...item }]);
  };

  const handleItemSelect = (item) => {
    let cleanItem;
    if (item.name.includes(",")) {
      cleanItem = item.name.replace(/,.*/, "");
    } else {
      // Regular expression to match emojis
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanItem = item.name.replace(regexEmoji, "");
    }
    if (cleanItem) {
      setSelectedMeal(cleanItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main className="bg-slate-950 p-2 m-2">
      <h2 className="text-3xl font-bold mb-4">
        <Link href="/week-10">Shopping List</Link>
      </h2>
      <div className="flex">
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-4">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          {selectedMeal !== null ? (
            <MealIdeas meal={selectedMeal} />
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
      </div>
    </main>
  );
}
