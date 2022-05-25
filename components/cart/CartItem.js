import classes from './CartItem.module.css';
import Link from 'next/link';

const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        {item.tapa && (
          <h3>
            <b>Tapa:</b> {item.tapa.nameWood}
          </h3>
        )}
        {item.aro && (
          <h3>
            <b>Aro:</b> {item.aro.nameWood}
          </h3>
        )}
        {item.fondo && (
          <h3>
            <b>Fondo:</b> {item.fondo.nameWood}
          </h3>
        )}
        {item.diapason && (
          <h3>
            <b>Diapasón: </b> {item.diapason.nameWood}
          </h3>
        )}

        <div className={classes.summary}>
          <span className={classes.price}>{item.price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      {item.id && (
        <Link
          href={`/singleView?id=${item.id}&style=${item.style}&tapa=${item.tapa?.id}&aro=${item.aro?.id}&fondo=${item.fondo?.id}&diapason=${item.diapason?.id}`}
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
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
