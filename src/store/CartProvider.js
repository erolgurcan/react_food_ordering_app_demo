import CartContext from "./cart-content";

const CartProvider = (props) => {

const addItemToCartHandler = item =>{};

const remoteItemFromCartHander = id =>{};

const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler ,
    remoteItem: remoteItemFromCartHander
};


  return <CartContext.Provider value = {cartContext}>
      {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
