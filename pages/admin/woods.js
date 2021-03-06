import { useState, useEffect } from 'react';
import WoodForm from 'components/woods/woodForm';
import Modal from 'components/UI/Modal';
import styles from 'styles/Home.module.css';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';
import { useSession } from 'next-auth/react';

const Woods = () => {
  const [woods, setWoods] = useState([]);
  const [woodToEdit, setWoodToEdit] = useState({});
  const [refetch, setRefetch] = useState(true);
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState('');
  const { data: session, status } = useSession();

  useEffect(() => {
    if (refetch) {
      fetch('/api/woods')
        .then((res) => res.json())
        .then((res) => setWoods(res.data))
        .finally(() => setRefetch(false));
    }
  }, [refetch]);

  const handleWoodAdded = () => {
    setRefetch(true);
  };

  const deleteWood = async (id) => {
    await fetch(`/api/woods/${id}`, {
      method: 'DELETE'
    }).catch(() => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)'
      );
    });

    setWoods(woods.filter((wood) => wood.id !== id));
    setMessage('Borrado correctamente');
  };

  const selectWood = async (id) => {
    setWoods(woods.filter((wood) => wood.id === id));
    setWoodToEdit(woods.find((wood) => wood.id === id));
    setEdit(true);
    setMessage('Menu editar');
  };

  const closeMessageHandler = () => {
    setMessage('');
  };

  if (!session || session.user.role !== 'admin') {
    return (
      <div className="container">
        <Titles title="Guitars" />
        <p>
          <strong>
            Lo sentimos, pero no tienes permisos para acceder a esta página.
          </strong>
        </p>
      </div>
    );
  }

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
        <WoodForm
          edit={edit}
          onEdit={() => {
            setEdit(false);
            setWoodToEdit({});
            handleWoodAdded();
          }}
          woodToEdit={woodToEdit}
          onWoodAdded={handleWoodAdded}
        />
        <GuitarComponentsList
          woods={woods}
          woodType={'tapa'}
          label={'Borrar'}
          component={'Tapas'}
          onEditWood={selectWood}
          onButtonClick={deleteWood}
          buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
        />
        <GuitarComponentsList
          woods={woods}
          woodType={'aro'}
          label={'Borrar'}
          component={'Aros'}
          onEditWood={selectWood}
          onButtonClick={deleteWood}
          buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
        />
        <GuitarComponentsList
          woods={woods}
          woodType={'fondo'}
          label={'Borrar'}
          component={'Fondos'}
          onEditWood={selectWood}
          onButtonClick={deleteWood}
          buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
        />
        <GuitarComponentsList
          woods={woods}
          woodType={'diapason'}
          label={'Borrar'}
          component={'Diapasones'}
          onEditWood={selectWood}
          onButtonClick={deleteWood}
          buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
        />
      </div>
    </>
  );
};

export default Woods;
