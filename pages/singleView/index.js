import { GuitarCard } from 'components/guitars/GuitarCard';
import { Card } from 'components/UI/ImageCard';
// import { useSearchParams } from 'react-router-dom';
import { useRouter } from 'next/router';

const Singleview = () => {
  const router = useRouter();
  const { id, status } = router.query;

  return (
    <>
      <div className="p-20">
        <h1>ID: {id}</h1>
      </div>

      {/* <GuitarCard
        key={guitar.id}
        id={guitar.id}
        name={guitar.name}
        description={guitar.details}
        price={guitar.price}
        image={guitar.image}
      /> */}
    </>
  );
};

export default Singleview;
