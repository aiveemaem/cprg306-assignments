"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}"
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  // const [selectedIngredient, setSelectedIngredient] = useState("");

  const loadMealIdeas = async (ingredient) => {
    const meal = await fetchMealIdeas(ingredient);
    setMeals(meal || []);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <main>
      <div className="">
        <div>
          <p>Here are some meal ideas using {ingredient} </p>
        </div>
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
