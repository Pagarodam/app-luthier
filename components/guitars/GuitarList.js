import Titles from 'components/UI/Titles';
import { useContext } from 'react';
import { GuitarCard } from './GuitarCard';
import CartContext from 'components/store/cart-context';

const GuitarList = ({ guitars, deleteGuitar }) => {
  const getGuitarsByStyle = (guitars, guitarStyle) =>
    guitars.filter((guitar) => guitar.style === guitarStyle);

  const clasic = getGuitarsByStyle(guitars, 'clasico');
  const flamenco = getGuitarsByStyle(guitars, 'flamenco');

  const cartCtx = useContext(CartContext);

  console.log(guitars[0] + 'guitars');

  const addToCart = (amount) => {
    cartCtx.addItem({
      amount: amount,
      // name: props.name,
      // price: props.price,
    });
    console.log('Purchased 1', amount);
  };

  return (
    <>
      {guitars.length && <Titles label={'Guitarras'} />}
      {guitars.length && <Titles label={'Clasico'} />}
      <div className="flex flex-wrap justify-around">
        {clasic?.map((guitar) => (
          <GuitarCard
            // ref={ref}
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            deleteGuitar={deleteGuitar}
            addToCart={addToCart}
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
      {guitars.length && <Titles label={'Flamenco'} />}
      <div className="flex flex-wrap justify-around">
        {flamenco?.map((guitar) => (
          <GuitarCard
            // ref={ref}
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            deleteGuitar={deleteGuitar}
            addToCart={addToCart}
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

export default GuitarList;
