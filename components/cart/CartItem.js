import Button from 'components/UI/Button';
import classes from './CartItem.module.css';
import Link from 'next/link';

const CartItem = (props) => {
  //   const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        {props.tapa && (
          <h3>
            <b>Tapa:</b> {props.tapa}
          </h3>
        )}
        {props.aro && (
          <h3>
            <b>Aro:</b> {props.aro}
          </h3>
        )}
        {props.fondo && (
          <h3>
            <b>Fondo:</b> {props.fondo}
          </h3>
        )}
        {props.diapason && (
          <h3>
            <b>Diapasón: </b> {props.diapason}
          </h3>
        )}

        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      {props.id && (
        <Link
          href={`/singleView?id=${props.id}&status=${'props.tapa.namewood'}`}
        >
          <a
            className={
              'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded'
            }
          >
            Ver
          </a>
        </Link>
      )}

      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
