import { useState, useEffect } from 'react';
import GuitarForm from 'components/guitars/GuitarForm';
import Modal from 'components/UI/Modal';
import { GuitarCard } from 'components/guitars/GuitarCard';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';

const EMPTY_GUITAR_COMPONENTS = {
  tapa: '',
  aro: '',
  fondo: '',
  diapason: '',
};

const Guitars = (props) => {
  const [message, setMessage] = useState('');
  const [woods, setWoods] = useState([]);
  const [guitars, setGuitars] = useState([]);
  const [guitarComponents, setGuitarComponents] = useState({
    ...EMPTY_GUITAR_COMPONENTS,
  });

  const closeMessageHandler = () => {
    setMessage('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/woods')
      .then((res) => res.json())
      .then((res) => setWoods(res.data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/guitars')
      .then((res) => res.json())
      .then((res) => setGuitars(res.data));
  }, []);

  const deleteGuitar = async (id) => {
    await fetch(`http://localhost:3000/api/guitars/${id}`, {
      method: 'DELETE',
    }).catch(() => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)',
      );
    });

    setGuitars(guitars.filter((guitar) => guitar.id !== id));
    setMessage('Borrado correctamente');
  };

  const addToGuitar = async (id) => {
    const selectedComponent = woods.find((woods) => woods.id === id);

    setGuitarComponents({
      ...guitarComponents,
      [selectedComponent.component]: selectedComponent,
    });
  };
  console.log('guitars', guitars);

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
        guitarComponents={guitarComponents}
        onGuitarCreated={(newGuitar) => {
          setGuitars([...guitars, newGuitar]);
          setGuitarComponents({ ...EMPTY_GUITAR_COMPONENTS });
        }}
      />
      <GuitarComponentsList
        woods={woods}
        label={'Añadir'}
        onButtonClick={addToGuitar}
        buttonColor={`bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded`}
      />

      {guitars.length && <Titles label={'Guitarras'} />}
      <div className="flex flex-wrap justify-around">
        {guitars?.map((guitar) => (
          <GuitarCard
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            deleteGuitar={deleteGuitar}
            description={guitar.description}
            price={guitar.price}
            style={guitar.style}
            image={guitar.image}
            tapa={guitar.tapa}
            aro={guitar.aro}
            fondo={guitar.fondo}
            diapason={guitar.diapason}
          />
        ))}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/guitars');
//   const guitars = await response.json();

//   return { props: { guitars }, revalidate: 3600 };
// }

export default Guitars;
