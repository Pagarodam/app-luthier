import Image from 'next/image';

export const GuitarCard = ({ id, nameGuitar, details, price, image }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={image} alt={nameGuitar} width={200} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nameGuitar}</h2>
        <p>{details}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};
