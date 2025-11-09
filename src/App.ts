import React from 'react';
import { createRoot } from 'react-dom/client';

interface propsType {
  pizza: string;
  ingredient: string;
}

const Pizza = (props: propsType) => {
  return React.createElement('div', {}, [
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          gap: '100px',
          alignItems: 'center',
        },
      },

      [
        React.createElement('p', {}, 'Pizza:'),

        React.createElement('h1', {}, props.pizza),
      ]
    ),
    React.createElement('p', {}, props.ingredient),
  ]);
};

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
