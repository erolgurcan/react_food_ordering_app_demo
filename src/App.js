import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
    {cartIsShown && <Cart /> }
     
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
