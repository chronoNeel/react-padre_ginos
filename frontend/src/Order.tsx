import {useEffect, useState} from 'react';
import Pizza from './Pizza';

interface pizzaType {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  sizes: {
    S: number;
    M: number;
    L: number;
  };
}

type pizzaSize = 'M' | 'S' | 'L';

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState<pizzaType[]>([]);
  const [pizzaType, setPizzaType] = useState('pepperoni');
  const [pizzaSize, setPizzaSize] = useState<pizzaSize>('M');
  const [loading, setLoading] = useState(false);

  let selectedPizza, price;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = new Intl.NumberFormat('bn-BD').format(
      selectedPizza?.sizes[pizzaSize] as number
    );
  }

  useEffect(() => {
    const fetchPizzaTypes = async () => {
      try {
        setLoading(true);
        const pizzaRes = await fetch('/api/pizzas');
        const pizzaJson = await pizzaRes.json();
        setPizzaTypes(pizzaJson);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : 'Error fetching pizzas';
        console.log(message);
      } finally {
        setLoading(false);
      }
    };

    void fetchPizzaTypes();
  }, []);

  return (
    <div>
      <h2>Create Order</h2>

      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === 'S'}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'M'}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'L'}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
            <button type="submit">Add to cart</button>
            <div className="order-pizza">
              {loading ? (
                <div>loading....</div>
              ) : (
                selectedPizza && (
                  <Pizza
                    name={selectedPizza?.name}
                    description={selectedPizza?.description}
                    image={selectedPizza?.image}
                  />
                )
              )}
              <p>{price}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
