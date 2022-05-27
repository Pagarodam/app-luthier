import { useContext } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import CartContext from 'components/store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const totalAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="overflow-scroll max-h-80 ">
      {cartCtx.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-2">
        <span>Precio Total</span>
        <span>{totalAmount.toFixed(2)}€</span>
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
          <>
            <Button
              className={
                'bg-blue-500 hover:bg-blue-700 text-white cursor-pointer border-black border-2 m-2 py-1 px-3 rounded-xl'
              }
              label={'Comprar'}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
