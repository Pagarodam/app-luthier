import { useRef, useState } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

const GuitarCardForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <Button label={'+ Añadir'} className={'btn btn-primary'} />
        {/* <button>+ Add</button> */}
        {!amountIsValid && <p>Por favor introduce una cantidad valida (1-5)</p>}
      </form>
    </>
  );
};

export default GuitarCardForm;
