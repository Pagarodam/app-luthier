import Image from 'next/image';

export const GuitarCard = ({ id, nameGuitar, details, price, image }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl glass m-5">
      <figure>
        <Image
          src={image}
          alt={nameGuitar}
          width={315}
          height={490}
          objectFit="contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nameGuitar}</h2>
        <p>{details}</p>
        <p>Precio: {price} €</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};
