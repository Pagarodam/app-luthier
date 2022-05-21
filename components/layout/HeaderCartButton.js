import { useContext, useEffect, useState } from 'react';
import CartIcon from 'components/cart/CartIcon';
import CartContext from 'components/store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnNormal =
    'hover:bg-amber-700 rounded-3xl  cursor-pointer bg-amber-500 text-white flex justify-around py-2 px-3 m-4 ';
  const btnBounce =
    'hover:bg-amber-700 animate-[bounce_300ms_1]  rounded-3xl cursor-pointer bg-amber-500 text-white flex justify-around py-2 px-3 m-4 ';

  const btnClasses = `${btnNormal} ${btnIsHighlighted ? btnBounce : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onClick} className={btnClasses}>
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
