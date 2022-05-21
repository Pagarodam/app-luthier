import { useContext } from 'react';

import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import CartContext from 'components/store/cart-context';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.items, 'cartContext');

  const cartItems = (
    <ul className="overflow-hidden max-h-80">
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.tapa}</li>
      ))}
    </ul>
  );

  console.log(cartItems.props, 'cartItems');

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-2">
        <span>Total Amount</span>
        {console.log(totalAmount)}
        <span>{totalAmount}</span>
      </div>
      <div>
        <Button
          onClick={onClose}
          className={
            'bg-red-500 hover:bg-red-700 text-white cursor-pointer border-black border-2 m-2 py-1 px-3 rounded-xl'
          }
          label={'Cerrar'}
        />
        {hasItems && (
          <Button
            className={
              'bg-blue-500 hover:bg-blue-700 text-white cursor-pointer border-black border-2 m-2 py-1 px-3 rounded-xl'
            }
            label={'Comprar'}
          />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
