import Image from 'next/image';

const BUTTON_TYPE = Object.freeze({
  BORRAR: 'Borrar',
});

export const Card = ({
  id,
  name,
  details,
  price,
  image,
  component,
  style,
  buttonLabel,
  buttonColor,
  ...props
}) => {
  const color = buttonLabel === BUTTON_TYPE.BORRAR ? 'red' : 'green';
  return (
    <div className="card card-side bg-base-100 shadow-xl glass m-5 w-1/4 items-center">
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
        <p>{details}</p>
        <p>{style}</p>
        <p>Precio: {price} €</p>
        <p>Componente: {component} </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => props.onButtonClick(id)}
            className={buttonColor}
          >
            {buttonLabel}
          </button>
        </div>

        {props.onEditWood && (
          <div className="card-actions justify-end">
            <button
              onClick={() => props.onEditWood(id)}
              className={`bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded`}
            >
              {'Edit'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
