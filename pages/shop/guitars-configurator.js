import { useState, useEffect } from 'react';

import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';

export default function GuitarsConfigurator() {
  const [woods, setWoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/woods')
      .then((res) => res.json())
      .then((res) => setWoods(res.data));
  }, []);

  const onAddWood = () => {
    console.log(' Added to somewhere');
    // TODO Add to cart or a guitar
  };

  return (
    <>
      <Titles
        label="Configurador de guitarras a medida ¡Elige los componentes de tu Guitarra
        a la carta!"
      />
      <GuitarComponentsList
        woods={woods}
        label={'Añadir'}
        onWoodDeleted={onAddWood}
        buttonColor={
          'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
        }
      />
    </>
  );
}
