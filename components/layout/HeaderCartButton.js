import { useContext } from 'react';
import CartIcon from 'components/cart/CartIcon';
// import { CartContext } from '../../store/cart-context';
import CartContext from 'components/store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      onClick={onClick}
      className="hover:bg-amber-700 hover:animate-bounce rounded-3xl cursor-pointer bg-amber-500 text-white flex justify-around py-2 px-3 m-4 "
    >
      <span className="w-6 h-6 mr-3">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-amber-300 py-0.25 px-1 ml-1 rounded-3xl font-bold">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
