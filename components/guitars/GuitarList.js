import Titles from 'components/UI/Titles';
import { GuitarCard } from './GuitarCard';

const GuitarList = ({ guitars, deleteGuitar, label }) => {
  return (
    <>
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
