import { Fragment } from "react";
import MealImage from "../../assets/OIP (1).jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mangesh FOOD STALL</h1>

        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="Delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
