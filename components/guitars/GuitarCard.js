import Button from 'components/UI/Button';
import Image from 'next/image';
import { useContext } from 'react';
import CartContext from 'components/store/cart-context';
import GuitarCardForm from './GuitarCardForm';
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

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <Button label={'X'} onClick={onClose} />
          <Image alt={name} src={image} width={'1000'} height={'1000'} />
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
                <div className="border-4 bg-blue-600 rounded overflow-visible border-slate-400 hover:scale-125 hover:cursor-pointer">
                  {tapa.image && (
                    <Image
                      src={tapa?.image}
                      alt={tapa?.name}
                      width={215}
                      height={215}
                    />
                  )}

                  <p className="text-center text-xl text-white bg-blue-600">
                    Tapa
                  </p>
                </div>
                <div className="border-4 bg-blue-600 rounded border-slate-400 hover:scale-125 hover:cursor-pointer">
                  {aro.image && (
                    <Image
                      src={aro?.image}
                      alt={aro?.name}
                      width={215}
                      height={215}
                    />
                  )}
                  <p className="text-center text-xl text-white bg-blue-600">
                    Aro
                  </p>
                </div>
                <div
                  className="border-4 bg-blue-600 rounded border-slate-400 hover:scale-125 hover:cursor-pointer"
                  onClick={() => showImage(fondo.image, fondo.name)}
                >
                  {fondo.image && (
                    <Image
                      src={fondo?.image}
                      alt={fondo?.name}
                      width={215}
                      height={215}
                    />
                  )}
                  <p className="text-center text-xl text-white bg-blue-600">
                    Fondo
                  </p>
                </div>
                <div className="border-4 bg-blue-600 rounded border-slate-400 hover:scale-125 hover:cursor-pointer">
                  {diapason.image && (
                    <Image
                      src={diapason?.image}
                      alt={diapason?.name}
                      width={215}
                      height={215}
                    />
                  )}
                  <p className="text-center text-xl text-white bg-blue-600">
                    Diapasón
                  </p>
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
