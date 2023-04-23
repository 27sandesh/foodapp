import React, { Fragment } from "react";
import AvilableMeal from "./AvilableMeal";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvilableMeal />
    </Fragment>
  );
};
export default Meals;
