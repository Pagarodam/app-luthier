import Titles from 'components/UI/Titles';
import { GuitarCard } from './GuitarCard';

const GuitarList = ({ guitars, deleteGuitar, label, style, editGuitar }) => {
  const getGuitarsByStyle = (guitars, guitarStyle) =>
    guitars?.filter((guitar) => guitar.style === guitarStyle);

  const filteredGuitars = getGuitarsByStyle(guitars, style);
  return (
    <>
      {filteredGuitars?.length && <Titles label={label} />}
      <div className="flex flex-wrap justify-around">
        {filteredGuitars?.map((guitar) => (
          <GuitarCard
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            deleteGuitar={deleteGuitar}
            editGuitar={editGuitar}
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
