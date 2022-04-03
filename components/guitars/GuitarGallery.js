import { onSnapshot, orderBy, collection, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase/client';
import { GuitarCard } from './GuitarCard';

export const GuitarGallery = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const guitarRef = collection(firestore, 'guitars');
    const q = query(guitarRef, orderBy('nameGuitar', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setGuitars(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );

      return unsubscribe;
    });
  });

  return (
    <>
      <div className="overflow-x-auto">
        {guitars.map((guitar) => (
          <GuitarCard
            key={guitar.id}
            id={guitar.id}
            nameGuitar={guitar.nameGuitar}
            details={guitar.details}
            price={guitar.price}
            image={guitar.image}
          />
        ))}
      </div>
    </>
  );
};
