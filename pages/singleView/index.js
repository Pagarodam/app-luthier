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
  const { id, style, tapa, aro, fondo, diapason, price } = router.query;
  const [selectedGuitar, setSelectedGuitar] = useState(EMPTY_GUITAR);
  const [selectedCustomGuitarComponents, setSelectedCustomGuitarComponents] =
    useState({});
  const customGuitarName = 'Custom';
  const customGuitarStyle = 'Custom';
  const customGuitarDescription =
    'Las piezas de esta guitarra están escogidas una a una por ti.';
  const customGuitarImage =
    'https://maderasbarber.com/tonewood/5180-max_box/kit-guitarra-clasica-modelo-acorde-cites.jpg';
  const show = true;

  console.log(tapa, 'Tapa');
  console.log('selectedCustomCosa', selectedCustomGuitarComponents.tapa);
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
  console.log(selectedGuitar.tapa, 'Tapa seleccionada a vacio');
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
              {selectedGuitar.name ? selectedGuitar.name : customGuitarName}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.style ? selectedGuitar.style : customGuitarStyle}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.description
                ? selectedGuitar.description
                : customGuitarDescription}
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.tapa.nameWood
                ? selectedGuitar.tapa.nameWood
                : selectedCustomGuitarComponents.tapa?.nameWood}{' '}
              {selectedGuitar.tapa.quality
                ? selectedGuitar.tapa.quality
                : selectedCustomGuitarComponents.tapa?.quality}{' '}
              Precio:{' '}
              {selectedGuitar.tapa.price
                ? selectedGuitar.tapa.price
                : selectedCustomGuitarComponents.tapa?.price}
              €
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.aro.nameWood
                ? selectedGuitar.aro.nameWood
                : selectedCustomGuitarComponents.aro?.nameWood}{' '}
              {selectedGuitar.aro.quality
                ? selectedGuitar.aro.quality
                : selectedCustomGuitarComponents.aro?.quality}{' '}
              Precio:{' '}
              {selectedGuitar.aro.price
                ? selectedGuitar.aro.price
                : selectedCustomGuitarComponents.aro?.price}
              €
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.fondo.nameWood
                ? selectedGuitar.fondo.nameWood
                : selectedCustomGuitarComponents.fondo?.nameWood}{' '}
              {selectedGuitar.fondo.quality
                ? selectedGuitar.fondo.quality
                : selectedCustomGuitarComponents.fondo?.quality}{' '}
              Precio:{' '}
              {selectedGuitar.fondo.price
                ? selectedGuitar.fondo.price
                : selectedCustomGuitarComponents.fondo?.price}
              €
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {selectedGuitar.diapason.nameWood
                ? selectedGuitar.diapason.nameWood
                : selectedCustomGuitarComponents.diapason?.nameWood}{' '}
              {selectedGuitar.diapason.quality
                ? selectedGuitar.diapason.quality
                : selectedCustomGuitarComponents.diapason?.quality}{' '}
              Precio:{' '}
              {selectedGuitar.diapason.price
                ? selectedGuitar.diapason.price
                : selectedCustomGuitarComponents.diapason?.price}
              €
            </td>
            <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
              {price}€
            </td>
          </tr>
        </table>
        <GuitarCard
          show={show}
          key={selectedGuitar.id}
          id={selectedGuitar.id}
          name={
            selectedGuitar.name
              ? selectedGuitar.name
              : selectedCustomGuitarComponents.customGuitarName
          }
          description={
            selectedGuitar.description
              ? selectedGuitar.description
              : customGuitarDescription
          }
          price={price}
          style={
            selectedGuitar.style ? selectedGuitar.style : customGuitarStyle
          }
          image={
            selectedGuitar.image ? selectedGuitar.image : customGuitarImage
          }
          tapa={
            selectedCustomGuitarComponents.tapa
              ? selectedCustomGuitarComponents.tapa
              : selectedGuitar.tapa
          }
          aro={
            selectedCustomGuitarComponents.aro
              ? selectedCustomGuitarComponents.aro
              : selectedGuitar.aro
          }
          fondo={
            selectedCustomGuitarComponents.fondo
              ? selectedCustomGuitarComponents.fondo
              : selectedGuitar.fondo
          }
          diapason={
            selectedCustomGuitarComponents.diapason
              ? selectedCustomGuitarComponents.diapason
              : selectedGuitar.diapason
          }
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
