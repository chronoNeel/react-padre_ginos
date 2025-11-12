import Pizza from './Pizza.js';

export default function App() {
  return (
    <div>
      <h1>Padre Gino's - Order now!</h1>
      <Pizza
        pizza="The pepperoni Pizza"
        ingredient="Mozarella Chesse, Pepperoni"
      />
      <Pizza
        pizza="Margherita Pizza"
        ingredient="Tomato sauce, mozzarella cheese, fresh basil, and olive oil"
      />
      <Pizza
        pizza="White Pizza"
        ingredient="Garlic oil, mushrooms, and fresh herbs, without tomato sauce."
      />
    </div>
  );
}
