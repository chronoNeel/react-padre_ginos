import {useEffect, useState} from 'react';
import {pizzaType} from './Order';

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState<pizzaType | null>(null);

  useEffect(() => {
    const fetchPizzaOfTheDay = async () => {
      const response = await fetch('/api/pizza-of-the-day');
      const data = await response.json();
      setPizzaOfTheDay(data);
    };

    void fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
