import classes from './CartItem.module.css';

const CartItem = (props) => {
  //   const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <h3>
          <b>Tapa:</b> {props.tapa}
        </h3>
        <h3>
          <b>Aro:</b> {props.aro}
        </h3>
        <h3>
          <b>Fondo:</b> {props.fondo}
        </h3>
        <h3>
          <b>Diapasón: </b> {props.diapason}
        </h3>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
