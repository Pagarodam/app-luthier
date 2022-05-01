import { GuitarCard } from './GuitarCard';

export const GuitarGallery = ({ guitars }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {guitars.data.map((guitar) => (
          <GuitarCard
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            description={guitar.details}
            price={guitar.price}
            image={guitar.image}
          />
        ))}
      </div>
    </>
  );
};
