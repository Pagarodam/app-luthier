import { useState, useContext, useRef } from 'react';
import GuitarComponentsList from 'components/guitars/GuitarComponentsList';
import Titles from 'components/UI/Titles';
import GuitarList from 'components/guitars/GuitarList';
import Image from 'next/image';
import clasic from 'public/assets/Guitarras/Clasica.png';
import flamenca from 'public/assets/Guitarras/Flamenca.jpg';
import custom from 'public/assets/Guitarras/Custom.jpg';
import CartContext from 'components/store/cart-context';

export default function GuitarsConfigurator({ guitars, woods, id }) {
  const [showComponents, setShowComponents] = useState(false);
  const [showGuitars, setShowGuitars] = useState(false);
  const amountInputRef = useRef();

  // const cartCtx = useContext(CartContext);

  const onAddWood = () => {
    console.log(' Added to somewhere');
    // TODO Add to cart or a guitar
  };

  // const addToCart = (amount) => {
  //   cartCtx.addItem({
  //     id: id,
  //     amount: amount,
  //   });
  //   console.log('Purchased');
  // };

  const showGuitarsHandler = () => {
    showGuitars ? setShowGuitars(false) : setShowGuitars(true);
  };

  const showComponentsHandler = () => {
    showComponents ? setShowComponents(false) : setShowComponents(true);
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
            onClick={showGuitarsHandler}
            src={clasic}
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
            onClick={showGuitarsHandler}
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
        <GuitarComponentsList
          woods={woods}
          label={'Añadir'}
          onWoodDeleted={onAddWood}
          buttonColor={
            'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
          }
        />
      )}
      {showGuitars && (
        <GuitarList
          // ref={amountInputRef}
          // addToCart={addToCart}
          guitars={guitars}
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
        woods: woods.data,
      },
    };
  } catch (error) {
    console.log('error', error);
  }
}
