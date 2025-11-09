import React from 'react';
import { createRoot } from 'react-dom/client';
import Pizza from './Pizza.js';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(Pizza, {
      pizza: 'The pepperoni Pizza',
      ingredient: 'Mozarella Chesse, Pepperoni',
    }),
    React.createElement(Pizza, {
      pizza: 'Margherita Pizza',
      ingredient: 'Tomato sauce, mozzarella cheese, fresh basil, and olive oil',
    }),
    React.createElement(Pizza, {
      pizza: 'White Pizza',
      ingredient:
        'Garlic oil, mushrooms, and fresh herbs, without tomato sauce. ',
    }),
  ]);
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(React.createElement(App));
