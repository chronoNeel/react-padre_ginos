interface propsType {
  pizza: string;
  ingredient: string;
  image: string;
}

const Pizza = (props: propsType) => {
  return (
    <div>
      <div className="flex">
        <h3>Pizza: {props.pizza}</h3>
        <p>Ingredient: {props.ingredient}</p>
        <img src={props.image} alt={props.pizza} />
      </div>
    </div>
  );
};

export default Pizza;
