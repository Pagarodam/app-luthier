import Button from 'components/UI/Button';
import Image from 'next/image';
import { useContext } from 'react';
import CartContext from 'components/store/cart-context';
import GuitarCardForm from './GuitarCardForm';
import Link from 'next/link';

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
  show
}) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      tapa: tapa,
      aro: aro,
      fondo: fondo,
      diapason: diapason
    });
  };

  const showImage = () => {
    <Link href={image}></Link>;
    console.log(image);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl glass m-5">
      <figure className="hover:cursor-pointer">
        <Link href={image}>
          {image && (
            <Image
              src={image}
              alt={name}
              width={315}
              height={490}
              objectFit="contain"
            />
          )}
        </Link>
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
        {!show && (
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
                onClick={() => editGuitar(id)}
                label={'Editar'}
                className={'btn btn-secondary'}
              />
            )}
            {!deleteGuitar && <GuitarCardForm onAddToCart={addToCartHandler} />}
          </div>
        )}
      </div>
    </div>
  );
};
