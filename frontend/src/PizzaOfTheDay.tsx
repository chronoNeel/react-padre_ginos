import {usePizzaOfTheDay} from './usePizzaOfTheDay';

const intl = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const PizzaOfTheDay = () => {
  const PizzaOfTheDay = usePizzaOfTheDay();

  if (!PizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{PizzaOfTheDay.name}</h3>
          <p>{PizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From:
            <span>{intl.format(PizzaOfTheDay.sizes.S)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={PizzaOfTheDay.image}
          alt={PizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
