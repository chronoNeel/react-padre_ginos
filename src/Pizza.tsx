interface propsType {
  pizza: string;
  ingredient: string;
}

const Pizza = (props: propsType) => {
  return (
    <div>
      <div className="flex">
        <h1>Pizza: {props.pizza}</h1>
        <p>Ingredient: {props.ingredient}</p>
      </div>
    </div>
  );
};

export default Pizza;
