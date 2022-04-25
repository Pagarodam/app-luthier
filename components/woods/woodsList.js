import {
  onSnapshot,
  orderBy,
  collection,
  query,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Card } from '../UI/ImageCard';
import { firestore } from '../firebase/client';

const WoodsList = () => {
  const [woods, setWoods] = useState([]);
  const [fetching, setFetching] = useState(false);

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

  const deleteWood = async (id, e) => {
    e.stopPropagation();
    setFetching(true);
    const docRef = doc(firestore, 'woods', id);
    await deleteDoc(docRef).catch((error) => {
      alert(error);
    });
    setFetching(false);
    alert(`Wood deleted: ${id}`);
  };

  return (
    <div className="flex">
      {woods.map((wood) => (
        <Card
          key={wood.id}
          id={wood.id}
          name={wood.nameWood}
          details={wood.quality}
          price={wood.price}
          image={wood.image}
          buttonLabel="Borrar"
          buttonColor="primary"
          onClick={(e) => deleteWood(wood.id, e)}
        />
      ))}
    </div>
  );
};

export default WoodsList;
