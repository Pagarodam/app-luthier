import Titles from 'components/UI/Titles';
import { GuitarCard } from './GuitarCard';

const GuitarList = ({ guitars, deleteGuitar, addToCart }) => {
  const getGuitarsByStyle = (guitars, guitarStyle) =>
    guitars.filter((guitar) => guitar.style === guitarStyle);

  const clasic = getGuitarsByStyle(guitars, 'clasico');
  const flamenco = getGuitarsByStyle(guitars, 'flamenco');
  return (
    <>
      {guitars.length && <Titles label={'Guitarras'} />}
      {guitars.length && <Titles label={'Clasico'} />}
      <div className="flex flex-wrap justify-around">
        {clasic?.map((guitar) => (
          <GuitarCard
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
