import { useState, useEffect } from 'react';
import WoodForm from 'components/woods/woodForm';
import Modal from 'components/UI/Modal';
import styles from 'styles/Home.module.css';
import GuitarComponentsList from 'components/woods/guitarComponentsList';
const Woods = () => {
  const [woods, setWoods] = useState([]);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    if (refetch) {
      fetch('http://localhost:3000/api/woods')
        .then((res) => res.json())
        .then((res) => setWoods(res.data))
        .finally(() => setRefetch(false));
    }
  }, [refetch]);

  const handleWoodAdded = () => {
    setRefetch(true);
  };

  const deleteWood = async (id) => {
    await fetch(`http://localhost:3000/api/woods/${id}`, {
      method: 'DELETE',
    }).catch(() => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)',
      );
    });

    setWoods(woods.filter((wood) => wood.id !== id));
    setMessage('Borrado correctamente');
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
      <div className={styles.container}>
        <WoodForm onWoodAdded={handleWoodAdded} />
        <GuitarComponentsList
          woods={woods}
          label={'Borrar'}
          onWoodDeleted={deleteWood}
          buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
        />
      </div>
    </>
  );
};

export default Woods;
