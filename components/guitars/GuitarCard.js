import Button from 'components/UI/Button';
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
        <p>{description}</p>
        <p>Estilo: {style}</p>
        <p>Precio: {price} €</p>
        <p>Tapa: {tapa.nameWood}</p>
        <p>Aro: {aro.nameWood}</p>
        <p>Fondo: {fondo.nameWood}</p>
        <p>Diapasón: {diapason.nameWood}</p>
        <div className="card-actions justify-end">
          <Button
            onClick={() => deleteGuitar(id)}
            label={'Borrar'}
            className={'btn btn-primary'}
          />
          <Button
            onClick={() => props.editGuitar(id)}
            label={'Editar'}
            className={'btn btn-secondary'}
          />
        </div>
      </div>
    </div>
  );
};
