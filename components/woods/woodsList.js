import { onSnapshot, orderBy, collection, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase/client';
import WoodForm from './woodForm';
import Woods from './woods';

const WoodsList = () => {
  const [woods, setWoods] = useState([]);
  useEffect(() => {
    const woodsRef = collection(firestore, 'woods');
    const q = query(woodsRef, orderBy('nameWood', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setWoods(
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
      <WoodForm />
      <div className="wood">
        {woods.map((wood) => (
          <Woods
            key={wood.id}
            id={wood.id}
            nameWood={wood.nameWood}
            quality={wood.quality}
            price={wood.price}
          />
        ))}
      </div>
    </>
  );
};

export default WoodsList;
