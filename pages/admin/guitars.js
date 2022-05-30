import { useState, useEffect } from 'react';
import GuitarForm from 'components/guitars/GuitarForm';
import Modal from 'components/UI/Modal';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import GuitarList from 'components/guitars/GuitarList';
import Titles from 'components/UI/Titles';
import { useSession } from 'next-auth/react';

const EMPTY_GUITAR_COMPONENTS = {
  tapa: {
    nameWood: ''
  },
  aro: {
    nameWood: ''
  },
  fondo: {
    nameWood: ''
  },
  diapason: {
    nameWood: ''
  }
};

const Guitars = (props) => {
  const [message, setMessage] = useState('');
  const [woods, setWoods] = useState([]);
  const [guitars, setGuitars] = useState([]);
  const [guitarComponents, setGuitarComponents] = useState({
    ...EMPTY_GUITAR_COMPONENTS
  });
  const adminGuitars = true;
  const { data: session, status } = useSession();

  const closeMessageHandler = () => {
    setMessage('');
  };

  useEffect(() => {
    fetch('/api/woods')
      .then((res) => res.json())
      .then((res) => setWoods(res.data));
  }, []);

  useEffect(() => {
    fetch('/api/guitars')
      .then((res) => res.json())
      .then((res) => setGuitars(res.data));
  }, []);

  const deleteGuitar = async (id) => {
    await fetch(`/api/guitars/${id}`, {
      method: 'DELETE'
    }).catch(() => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)'
      );
    });

    setGuitars(guitars.filter((guitar) => guitar.id !== id));
    setMessage('Borrado correctamente');
  };

  const addToGuitar = async (id) => {
    const selectedComponent = woods.find((woods) => woods.id === id);

    setGuitarComponents({
      ...guitarComponents,
      [selectedComponent.component]: selectedComponent
    });
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
      <GuitarForm
        onAdminGuitars={adminGuitars}
        guitarComponents={guitarComponents}
        onGuitarCreated={(newGuitar) => {
          setGuitarComponents({ ...EMPTY_GUITAR_COMPONENTS });
          console.log('newGuitar', newGuitar);
          setGuitars([...guitars, newGuitar]);
        }}
      />
      <Titles label={'Componentes'} />
      <GuitarComponentsList
        woods={woods}
        woodType={'tapa'}
        component={'Tapas'}
        label={'Añadir'}
        onButtonClick={addToGuitar}
        buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
      />
      <GuitarComponentsList
        woods={woods}
        woodType={'aro'}
        component={'Aros'}
        label={'Añadir'}
        onButtonClick={addToGuitar}
        buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
      />
      <GuitarComponentsList
        woods={woods}
        woodType={'fondo'}
        component={'Fondos'}
        label={'Añadir'}
        onButtonClick={addToGuitar}
        buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
      />
      <GuitarComponentsList
        woods={woods}
        woodType={'diapason'}
        component={'Diapasón'}
        label={'Añadir'}
        onButtonClick={addToGuitar}
        buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
      />
      <Titles label={'Guitarras'} />
      <GuitarList
        style={'clasico'}
        deleteGuitar={deleteGuitar}
        guitars={guitars}
        label={'Guitarras clasicas'}
      />
      <GuitarList
        style={'flamenco'}
        deleteGuitar={deleteGuitar}
        guitars={guitars}
        label={'Guitarras flamencas'}
      />
    </>
  );
};

export default Guitars;
