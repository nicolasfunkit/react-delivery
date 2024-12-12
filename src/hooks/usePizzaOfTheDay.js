import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  const [loading, setLoading] = useState(true);
  useDebugValue(
    loading ? `Loading pizza of the day...` : `${pizzaOfTheDay.id}`,
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
      setLoading(false);
    }

    fetchPizzaOfTheDay();
  }, []);

  return { pizzaOfTheDay, loading };
};
