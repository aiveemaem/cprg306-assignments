"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (meal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ meal }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (meal) => {
    const fetchedMeals = await fetchMealIdeas(meal);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas(meal);
  }, [meal]);

  return (
    <main>
      <div className="">
        <div>
          {meals ? (
            <p>Here are some meal ideas using {meal}</p>
          ) : (
            <p>No meal ideas found for {meal}</p>
          )}
        </div>
        {meals ? (
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </main>
  );
}
