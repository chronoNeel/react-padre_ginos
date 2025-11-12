interface propsType {
  pizza: string;
  ingredient: string;
}

const Pizza = (props: propsType) => {
  return (
    <div>
      <div className="flex">
        <h3>Pizza: {props.pizza}</h3>
        <p>Ingredient: {props.ingredient}</p>
      </div>
    </div>
  );
};

export default Pizza;
