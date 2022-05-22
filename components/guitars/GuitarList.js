import Titles from 'components/UI/Titles';
import { GuitarCard } from './GuitarCard';

const GuitarList = ({ guitars, deleteGuitar, label }) => {
  // const getGuitarsByStyle = (guitars, guitarStyle) =>
  //   guitars.filter((guitar) => guitar.style === guitarStyle);

  // const clasic = getGuitarsByStyle(guitars, 'clasico');
  // const flamenco = getGuitarsByStyle(guitars, 'flamenco');

  return (
    <>
      {/* {guitars?.length || (guitars?.length && <Titles label={'Guitarras'} />)} */}
      {guitars?.length && <Titles label={label} />}
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

export default GuitarList;
