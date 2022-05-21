import { useRef, useState } from 'react';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Image from 'next/image';

export const GuitarCard = ({
  id,
  name,
  description,
  style,
  price,
  image,
  aro,
  tapa,
  fondo,
  diapason,
  deleteGuitar,
  editGuitar,
  addToCart,
}) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCart(enteredAmountNumber);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl glass m-5">
      <figure>
        <Image
          src={image}
          alt={name}
          width={315}
          height={490}
          objectFit="contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Estilo: {style}</p>
        <p>Precio: {price} €</p>
        <p>Tapa: {tapa.nameWood}</p>
        <p>Aro: {aro.nameWood}</p>
        <p>Fondo: {fondo.nameWood}</p>
        <p>Diapasón: {diapason.nameWood}</p>
        <div className="card-actions justify-end">
          {addToCart && (
            <Button
              onClick={() => addToCart(id)}
              label={'Añadir al carro'}
              className={'btn btn-primary'}
            />
          )}
          {deleteGuitar && (
            <Button
              onClick={() => deleteGuitar(id)}
              label={'Borrar'}
              className={'btn btn-primary'}
            />
          )}
          {editGuitar && (
            <Button
              onClick={() => props.editGuitar(id)}
              label={'Editar'}
              className={'btn btn-secondary'}
            />
          )}
          <form onSubmit={submitHandler}>
            <Input
              ref={amountInputRef}
              input={{
                id: 'amount_' + id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
              }}
            />
            <button>+ Add</button>
            {!amountIsValid && (
              <p>Por favor introduce una cantidad valida (1-5)</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
