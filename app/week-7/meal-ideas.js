"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}"
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ meal }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(meals);

  const loadMealIdeas = async (meal) => {
    const meals = await fetchMealIdeas(meal);
    setLoading(false);
    if (meals) {
      setMeals(meals);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadMealIdeas(meal);
  }, [meal]);

  return (
    <main>
      <div className="">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : meals.length ? (
            <p>Here are some meal ideas using {meal}</p>
          ) : (
            <p>No meal ideas found for {meal}</p>
          )}
        </div>
        {meals.length > 0 && (
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
