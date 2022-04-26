import Image from 'next/image';

export const Card = ({
  id,
  name,
  details,
  price,
  image,
  component,
  style,
  onClick,
  buttonLabel,
  buttonColor,
}) => {
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
        <p>{details}</p>
        <p>{style}</p>
        <p>Precio: {price} €</p>
        <p>Componente: {component} </p>
        <div className="card-actions justify-end">
          <button onClick={onClick} className={`btn btn-${buttonColor}`}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
