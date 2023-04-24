import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const ShowCartHandler = () => {
    setcartIsShown(true);
  };
  const HideCartHandler = () => {
    setcartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
