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
import Modal from '../UI/Modal';

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

  // const woodRef = doc(firestore, 'woods', id);

  const deleteWood = async (id, e) => {
    e.stopPropagation();
    setFetching(true);
    const docRef = doc(firestore, 'woods', id);
    await deleteDoc(docRef).catch((error) => {
      setMessage(
        'Upps, vaya algo ha fallado. No se ha podido borrar la madera (Todo mal)',
      );

      alert(error);
    });
    setFetching(false);
    setMessage('Borrado correctamente');

    // alert(`Wood deleted: ${id}`);
  };

  const [message, setMessage] = useState('');

  const closeMessageHandler = () => {
    setMessage('');
  };
  // const updateWood = async (id, e) => {
  //   e.stopPropagation();
  //   setFetching(true);
  //   await updateDoc(woodRef).catch((error) => {
  //     alert(error);
  //   });
  //   setFetching(false);
  //   alert(`Wood deleted: ${id}`);
  // };

  return (
    <>
      {message && (
        <Modal onClose={closeMessageHandler}>
          <div>{message}</div>
          <button className="btn btn-primary" onClick={closeMessageHandler}>
            Cerrar
          </button>
        </Modal>
      )}
      <div className="flex">
        {woods.map((wood) => (
          <Card
            key={wood.id}
            id={wood.id}
            name={wood.nameWood}
            details={wood.quality}
            price={wood.price}
            image={wood.image}
            component={wood.component}
            style={wood.style}
            buttonLabel="Borrar"
            buttonColor="primary"
            onClick={(e) => deleteWood(wood.id, e)}
          />
        ))}
      </div>
    </>
  );
};

export default WoodsList;
