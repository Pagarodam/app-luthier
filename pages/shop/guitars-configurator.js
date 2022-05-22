import { useState } from 'react';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';
import GuitarList from 'components/guitars/GuitarList';
import Image from 'next/image';
import clasica from 'public/assets/Guitarras/Clasica.png';
import flamenca from 'public/assets/Guitarras/Flamenca.jpg';
import custom from 'public/assets/Guitarras/Custom.jpg';

export default function GuitarsConfigurator({ guitars, woods, id }) {
  const [showComponents, setShowComponents] = useState(false);
  const [showClassicGuitars, setShowClassicGuitars] = useState(false);
  const [showFlamencoGuitars, setShowFlamencoGuitars] = useState(false);

  const onAddWood = () => {
    console.log(' Added to somewhere');
    // TODO Add to cart or a guitar
  };

  const getGuitarsByStyle = (guitars, guitarStyle) =>
    guitars.filter((guitar) => guitar.style === guitarStyle);

  const clasic = getGuitarsByStyle(guitars, 'clasico');
  const flamenco = getGuitarsByStyle(guitars, 'flamenco');

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

          <GuitarComponentsList
            woods={woods}
            label={'Añadir'}
            onWoodDeleted={onAddWood}
            buttonColor={
              'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
            }
          />
        </>
      )}

      {showClassicGuitars && (
        <>
          <GuitarList guitars={clasic} label={'Guitarras Clasicas'} />
        </>
      )}
      {showFlamencoGuitars && (
        <GuitarList guitars={flamenco} label={'Guitarras Flamencas'} />
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
        woods: woods.data,
      },
    };
  } catch (error) {
    console.log('error', error);
  }
}
