import { useState, useEffect } from 'react';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';
import GuitarList from 'components/guitars/GuitarList';
import Image from 'next/image';
import clasica from 'public/assets/Guitarras/Clasica.png';
import flamenca from 'public/assets/Guitarras/Flamenca.jpg';
import custom from 'public/assets/Guitarras/Custom.jpg';
import GuitarComponentsInput from 'components/guitars/GuitarComponentsInputs';

const INITIAL_VALUES = {
  name: 'Custom',
  description:
    'GuitarraCustom donde tu eliges las piezas que quieres que te montemos',
  price: 0,
  handJob: 300,
  shippingCosts: 250,
  image:
    'https://maderasbarber.com/tonewood/5204-large_default/kit-acabado-guitarra-flamenca.jpg',
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
  },
  style: 'flamenco'
};

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

const sumWithoutUndefineds = (...data) => {
  return data.reduce((prev, curr) => (curr ? prev + curr : prev), 0);
};

export default function GuitarsConfigurator({ guitars, woods }) {
  const [showComponents, setShowComponents] = useState(false);
  const [showClassicGuitars, setShowClassicGuitars] = useState(false);
  const [showFlamencoGuitars, setShowFlamencoGuitars] = useState(false);
  const [guitarComponents, setGuitarComponents] = useState({
    ...EMPTY_GUITAR_COMPONENTS
  });
  const [guitar, setGuitar] = useState({
    ...INITIAL_VALUES
  });

  useEffect(() => {
    setGuitar({
      ...guitar,
      ...guitarComponents,
      price: sumWithoutUndefineds(
        guitar.shippingCosts,
        guitar.handJob,
        guitarComponents.tapa?.price,
        guitarComponents.aro?.price,
        guitarComponents.fondo?.price,
        guitarComponents.diapason?.price
      )
    });
  }, [guitar, guitarComponents]);

  const onAddWood = () => {
    console.log(' Added to somewhere');
    // TODO Add to cart or a guitar
  };

  const showClassicGuitarsHandler = () => {
    showClassicGuitars
      ? setShowClassicGuitars(false)
      : setShowClassicGuitars(true);
    setShowComponents(false);
    setShowFlamencoGuitars(false);
  };

  const showFlamencoGuitarsHandler = () => {
    showFlamencoGuitars
      ? setShowFlamencoGuitars(false)
      : setShowFlamencoGuitars(true);
    setShowComponents(false);
    setShowClassicGuitars(false);
  };

  const showComponentsHandler = () => {
    showComponents ? setShowComponents(false) : setShowComponents(true);
    setShowClassicGuitars(false);
    setShowFlamencoGuitars(false);
  };

  const addToGuitar = async (id) => {
    const selectedComponent = woods.find((woods) => woods.id === id);

    setGuitarComponents({
      ...guitarComponents,
      [selectedComponent.component]: selectedComponent
    });
  };

  return (
    <>
      <Titles
        label="Configurador de guitarras a medida ¡Elige los componentes de tu Guitarra
        a la carta!"
      />
      <div className="flex justify-evenly items-center">
        <div className="p-4 m-4 hover:cursor-pointer hover:scale-110 ">
          <Image
            className="rounded-lg"
            onClick={showClassicGuitarsHandler}
            src={clasica}
            alt="Landscape picture"
            width={300}
            height={500}
            span={'Guitarras Clasicas'}
          />
          <div>
            <Titles
              label={'Guitarras Clasicas'}
              className={
                'text-2xl rounded-lg bg-blue-700 text-center font-bold  text-white-900'
              }
            />
          </div>
        </div>
        <div className="p-4 m-4 hover:cursor-pointer hover:scale-110">
          <Image
            className="rounded-lg"
            onClick={showFlamencoGuitarsHandler}
            src={flamenca}
            alt="Landscape picture"
            width={300}
            height={500}
          />
          <div>
            <Titles
              label={'Guitarras Flamencas'}
              className={
                'text-2xl rounded-lg bg-blue-700 text-center font-bold  text-white-900'
              }
            />
          </div>
        </div>
        <div className="p-4 m-4 hover:cursor-pointer hover:scale-110">
          <Image
            className="rounded-lg"
            onClick={showComponentsHandler}
            src={custom}
            alt="Landscape picture"
            width={500}
            height={500}
          />
          <div>
            <Titles
              label={'Guitarras Custom'}
              className={
                'text-2xl rounded-lg bg-blue-700 text-center font-bold  text-white-900'
              }
            />
          </div>
        </div>
      </div>
      {showComponents && (
        <>
          <Titles label={'Componentes'} />
          <GuitarComponentsInput
            tapa={guitar.tapa}
            aro={guitar.aro}
            fondo={guitar.fondo}
            diapason={guitar.diapason}
            name={guitar.name}
            guitarComponents={guitarComponents}
            price={guitar.price}
            label={'Añadir'}
          />
          <GuitarComponentsList
            woods={woods}
            woodType={'tapa'}
            label={'Añadir'}
            component={'Tapas'}
            onWoodDeleted={onAddWood}
            onButtonClick={addToGuitar}
            buttonColor={
              'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
            }
          />
          <GuitarComponentsList
            woods={woods}
            woodType={'aro'}
            label={'Añadir'}
            component={'Aros'}
            onWoodDeleted={onAddWood}
            onButtonClick={addToGuitar}
            buttonColor={
              'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
            }
          />
          <GuitarComponentsList
            woods={woods}
            woodType={'fondo'}
            label={'Añadir'}
            component={'Fondos'}
            onWoodDeleted={onAddWood}
            onButtonClick={addToGuitar}
            buttonColor={
              'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
            }
          />
          <GuitarComponentsList
            woods={woods}
            woodType={'diapason'}
            label={'Añadir'}
            component={'Diapasón'}
            onWoodDeleted={onAddWood}
            onButtonClick={addToGuitar}
            buttonColor={
              'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
            }
          />
        </>
      )}

      {showClassicGuitars && (
        <>
          <GuitarList
            guitars={guitars}
            style={'clasico'}
            label={'Guitarras Clasicas'}
          />
        </>
      )}
      {showFlamencoGuitars && (
        <GuitarList
          guitars={guitars}
          style={'flamenco'}
          label={'Guitarras Flamencas'}
        />
      )}
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
