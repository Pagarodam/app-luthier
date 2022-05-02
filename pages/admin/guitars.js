import { GuitarCard } from 'components/guitars/GuitarCard';
import { GuitarForm } from 'components/guitars/GuitarForm';

function Guitars(props) {
  return (
    <>
      {/* <GuitarForm />
      <div className="flex flex-wrap">
        {props.guitars.data.map((guitar) => (
          <GuitarCard
            key={guitar.id}
            id={guitar.id}
            name={guitar.name}
            description={guitar.details}
            price={guitar.price}
            image={guitar.image}
          />
        ))}
      </div> */}
      <p>guitars</p>
    </>
  );
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/guitars');
//   const guitars = await response.json();

//   return { props: { guitars }, revalidate: 3600 };
// }

export default Guitars;
