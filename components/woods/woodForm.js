import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { firestore } from '../firebase/client';
import Button from '../Button';
import capilalize from 'capitalize';

export default function WoodForm() {
  const [wood, setWood] = useState({ nameWood: '', price: '' });
  const onSubmit = async () => {
    const woodsRef = collection(firestore, 'woods');
    const docRef = await addDoc(woodsRef, {
      ...wood,
      nameWood: capilalize.words(wood.nameWood),
      price: Number(wood.price),
    }).catch((error) => {
      alert(error);
    });
    setWood({ nameWood: '', price: '' });
    alert(`Wood added: ${docRef.id}`);
  };
  return (
    <div className={styles.container}>
      <div className='formulario'>
        <h1>Formulario Maderas</h1>

        <p>
          <label>
            Nombre
            <span>*</span>
            <input
              value={wood.nameWood}
              onChange={(e) => setWood({ ...wood, nameWood: e.target.value })}
              type='text'
              required
              placeholder='Escribe el nombre de la madera'
            />
          </label>
        </p>
        <p>
          <label>
            Precio
            <input
              value={wood.price}
              onChange={(e) => setWood({ ...wood, price: e.target.value })}
              type='number'
              required
              placeholder='Escribe el precio'
            />
          </label>
        </p>
        <Button onClick={onSubmit} label='Enviar' />
        <p>
          <span> * </span>los campos son obligatorios.
        </p>
      </div>
    </div>
  );
}
