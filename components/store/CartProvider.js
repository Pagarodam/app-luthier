import { useReducer, useEffect } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const CartActions = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  CLEAN_CART: 'CLEAN_CART'
};

const cartReducer = (state, action) => {
  if (action.type === CartActions.ADD_CART_ITEM) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === CartActions.REMOVE_CART_ITEM) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === CartActions.CLEAN_CART) {
    return defaultCartState;
  }
  return defaultCartState;
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedState = JSON.parse(localStorage.getItem('cart'));
    return savedState || defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    loadFromLocalStorage()
  );

  useEffect(() => saveToLocalStorage(cartState), [cartState]);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: CartActions.ADD_CART_ITEM, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: CartActions.REMOVE_CART_ITEM, id: id });
  };

  const cleanCartHandle = () => {
    dispatchCartAction({ type: CartActions.CLEAN_CART });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cleanCart: cleanCartHandle
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
