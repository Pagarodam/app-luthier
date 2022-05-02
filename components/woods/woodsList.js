import { useEffect, useState } from 'react';
import { Card } from '../UI/ImageCard';
import Modal from '../UI/Modal';

const WoodsList = ({ woods, onWoodDeleted }) => {
  const deleteWood = async (id, e) => {
    e.stopPropagation();

    await fetch(`http://localhost:3001/woods/${id}`, {
      method: 'DELETE',
    }).catch(() => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)',
      );
    });

    setMessage('Borrado correctamente');
    onWoodDeleted(id);
  };

  const [message, setMessage] = useState('');

  const closeMessageHandler = () => {
    setMessage('');
  };

  return (
    <>
      {message && (
        <Modal onClose={closeMessageHandler}>
          <div>{message}</div>
          <button className="btn btn-primary" onClick={closeMessageHandler}>
            Cerrar
          </button>
        </Modal>
      )}
      <div className="flex flex-wrap justify-around">
        {woods.map((wood) => (
          <Card
            key={wood.id}
            id={wood.id}
            name={wood.nameWood}
            details={wood.quality}
            price={wood.price}
            image={wood.image}
            component={wood.component}
            style={wood.style}
            buttonLabel="Borrar"
            buttonColor="primary"
            onClick={(e) => deleteWood(wood.id, e)}
          />
        ))}
      </div>
    </>
  );
};

export default WoodsList;
