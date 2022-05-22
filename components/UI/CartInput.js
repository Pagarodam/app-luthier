import React from 'react';

// eslint-disable-next-line react/display-name
const CartInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props.input}></input>;
});

export default CartInput;
