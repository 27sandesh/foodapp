import classes from "./MealItems.module.css";
import MealItemform from "./MealItemform";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemform />
      </div>
    </li>
  );
};
export default MealItem;
