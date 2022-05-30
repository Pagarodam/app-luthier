import Button from 'components/UI/Button';
import Image from 'next/image';
import { useContext } from 'react';
import CartContext from 'components/store/cart-context';
import GuitarCardForm from './GuitarCardForm';
import Link from 'next/link';
import Modal from 'components/UI/Modal';
import { useState } from 'react';

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

  const [showModal, setShowModal] = useState(false);
  // const [src, setSrc] = useState('');
  // const [alt, setAlt] = useState('');
  const [modalImage, setModalImage] = useState({
    image: '',
    name: ''
  });

  const onClose = () => {
    setShowModal(false);
  };

  const showImage = (image, name) => {
    setModalImage(image, name);
    setShowModal(true);
  };
  console.log(tapa.image, 'Imagen');

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <Button label={'X'} onClick={onClose} />
          <Image
            alt={name}
            src={image}
            // layout="fill"
            // objectFit={'contain'}
            width={'1000'}
            height={'1000'}
          />
        </Modal>
      )}
      <div className="card card-side bg-base-100 shadow-xl glass m-5">
        <figure
          onClick={() => showImage(image, name)}
          className="hover:cursor-pointer"
        >
          {image && (
            <Image
              src={image}
              alt={name}
              width={315}
              height={490}
              objectFit="contain"
            />
          )}
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
          <div className="flex flex-wrap">
            {show && (
              <>
                <div className="border-4 rounded border-red-400">
                  {tapa.image && (
                    <Image
                      src={tapa?.image}
                      alt={tapa?.name}
                      width={315}
                      height={315}
                    />
                  )}

                  <p className="text-center text-xl text-white bg-blue-600">
                    Tapa
                  </p>
                </div>
                <div className="border-4 rounded border-red-400">
                  {aro.image && (
                    <Image
                      src={aro?.image}
                      alt={aro?.name}
                      width={315}
                      height={315}
                    />
                  )}
                </div>
                <div className="border-4 rounded border-red-400">
                  {fondo.image && (
                    <Image
                      src={fondo?.image}
                      alt={fondo?.name}
                      width={315}
                      height={315}
                    />
                  )}
                </div>
                <div className="border-4 rounded border-red-400">
                  {diapason.image && (
                    <Image
                      src={diapason?.image}
                      alt={diapason?.name}
                      width={315}
                      height={315}
                    />
                  )}
                </div>
              </>
            )}
          </div>
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
              {!deleteGuitar && (
                <GuitarCardForm onAddToCart={addToCartHandler} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
