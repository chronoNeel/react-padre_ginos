import {useEffect, useState} from 'react';
import Pizza from './Pizza';
import Cart from './Cart';

export interface pizzaType {
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

export interface CartItem {
  pizza: pizzaType;
  price: string;
  size: pizzaSize;
}

export type pizzaSize = 'M' | 'S' | 'L';

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState<pizzaType[]>([]);
  const [pizzaType, setPizzaType] = useState('pepperoni');
  const [pizzaSize, setPizzaSize] = useState<pizzaSize>('M');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
  const price = selectedPizza
    ? new Intl.NumberFormat('en-US').format(selectedPizza.sizes[pizzaSize])
    : '';

  console.log(cart);

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
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (selectedPizza) {
              setCart([
                ...cart,
                {pizza: selectedPizza, price, size: pizzaSize},
              ]);
            }
          }}
        >
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
                    onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                    checked={pizzaSize === 'S'}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                    checked={pizzaSize === 'M'}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    onChange={(e) => setPizzaSize(e.target.value as pizzaSize)}
                    checked={pizzaSize === 'L'}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>

          {loading ? (
            <div>loading....</div>
          ) : (
            selectedPizza && (
              <div className="order-pizza">
                <Pizza
                  name={selectedPizza?.name}
                  description={selectedPizza?.description}
                  image={selectedPizza?.image}
                />
                <p>{price}</p>
              </div>
            )
          )}
        </form>
      </div>

      {loading ? <h2>Loading...</h2> : <Cart cart={cart} />}
    </div>
  );
}
