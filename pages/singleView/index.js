import { GuitarCard } from 'components/guitars/GuitarCard';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const EMPTY_GUITAR = {
  tapa: {},
  diapason: {},
  aro: {},
  fondo: {}
};
export default function Singleview({ guitars, woods }) {
  const router = useRouter();
  const { id, style, tapa, aro, fondo, diapason } = router.query;
  const [selectedGuitar, setSelectedGuitar] = useState(EMPTY_GUITAR);
  const [selectedCustomGuitarComponents, setSelectedCustomGuitarComponents] =
    useState({});

  console.log(tapa, 'Tapa');
  console.log('selectedCustomCosa', selectedCustomGuitarComponents);
  const components = (id, componentType) => {
    console.log(componentType, id);
    setSelectedCustomGuitarComponents((customComponents) => ({
      [componentType]: woods.find((wood) => wood.id === id),
      ...customComponents
    }));
  };

  useEffect(() => {
    setSelectedGuitar(
      guitars?.find((guitar) => guitar.id === id) || EMPTY_GUITAR
    );
    components(tapa, 'tapa');
    components(aro, 'aro');
    components(fondo, 'fondo');
    components(diapason, 'diapason');
  }, [id]);
  console.log(selectedGuitar, 'guitarra Seleccionada');
  console.log(selectedGuitar.image, 'Imagen guitarra');
  console.log(selectedCustomGuitarComponents, 'SelectedCustomGuitarComponents');

  return (
    <>
      <div className="p-20">
        <table>
          <tr>
            <th className="border-2 border-black m-4 p-4">Nombre</th>
            <th className="border-2 border-black m-4 p-4">Estilo</th>
            <th className="border-2 border-black m-4 p-4">Descripción</th>
            <th className="border-2 border-black m-4 p-4">Tapa</th>
            <th className="border-2 border-black m-4 p-4">Aro</th>
            <th className="border-2 border-black m-4 p-4">Fondo</th>
            <th className="border-2 border-black m-4 p-4">Diapasón</th>
            <th className="border-2 border-black m-4 p-4">Precio</th>
          </tr>
          <tr>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.name}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.style}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.description}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.tapa.nameWood} {selectedGuitar.tapa.quality}{' '}
              Precio: {selectedGuitar.tapa.price}€
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.aro.nameWood} {selectedGuitar.aro.quality} Precio:{' '}
              {selectedGuitar.aro.price}€
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.fondo.nameWood} {selectedGuitar.fondo.quality}{' '}
              Precio: {selectedGuitar.fondo.price}€
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.diapason.nameWood}{' '}
              {selectedGuitar.diapason.quality} Precio:{' '}
              {selectedGuitar.diapason.price}€
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.price}€
            </td>
          </tr>
        </table>
        <GuitarCard
          key={selectedGuitar.id}
          id={selectedGuitar.id}
          name={selectedGuitar.name}
          description={selectedGuitar.description}
          price={selectedGuitar.price}
          style={selectedGuitar.style}
          image={selectedGuitar.image}
          tapa={selectedGuitar.tapa}
          aro={selectedGuitar.aro}
          fondo={selectedGuitar.fondo}
          diapason={selectedGuitar.diapason}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const guitarRes = await fetch('http://localhost:3000/api/guitars');
    const guitars = await guitarRes.json();
    const woodsRes = await fetch('http://localhost:3000/api/woods');
    const woods = await woodsRes.json();

    return {
      props: {
        guitars: guitars.data,
        woods: woods.data
      }
    };
  } catch (error) {
    console.log('error', error);
  }
}
