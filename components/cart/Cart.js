import { useContext } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import CartContext from 'components/store/cart-context';
import CartItem from './CartItem';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const INITIAL_CART_VALUES = {
  user: '',
  products: [
    {
      product: {
        id: '',
        quantity: null
      }
    }
  ]
};

const INITIAL_GUITAR_VALUES = {
  amount: '',
  id: '',
  price: '',
  aro: {},
  diapason: {},
  fondo: {},
  tapa: {}
};

const Cart = ({ onClose }) => {
  const { data: session, status } = useSession();
  const { id = '', name = '', email = '' } = session?.user || {};
  const cartCtx = useContext(CartContext);
  const { guitar, setGuitar } = useState(INITIAL_GUITAR_VALUES);
  const router = useRouter();
  const [order, setOrder] = useState(INITIAL_CART_VALUES);
  const [message, setMessage] = useState('');

  const totalAmount = cartCtx.totalAmount;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const addCustomGuitar = () => {};

  const handlerOnBuy = async (event) => {
    event.preventDefault();
    const guitarsToBuy = [];
    cartCtx.items.map(async (item) => {
      if (item.style === 'custom') {
        const res = await fetch('/api/guitars', {
          method: 'POST',
          body: JSON.stringify({
            ...guitar,
            ...item,
            id: null,
            name: item.name,
            style: item.style,
            description: item.description || 'default description',
            tapa: item.tapa.id,
            aro: item.aro.id,
            fondo: item.fondo.id,
            diapason: item.diapason.id,
            price: Number(item.price),
            image: `https://maderasbarber.com/tonewood/5204-large_default/kit-acabado-guitarra-flamenca.jpg}`
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json());
        guitarsToBuy.push({ product: res.data.id, quantity: item.amount });
      } else {
        guitarsToBuy.push({ product: item.id, quantity: item.amount });
      }
    });
    await fetch('/api/cart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: id,
        products: guitarsToBuy
      })
    }).then((res) => res.json());
    cartCtx.cleanCart();
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
              onClick={handlerOnBuy}
              label={'Comprar'}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
