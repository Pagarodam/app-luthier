import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { firestore } from '../firebase/client';
import Button from '../Button';
import capilalize from 'capitalize';

export default function WoodForm() {
  const [fetching, setFetching] = useState( false );
  const [wood, setWood] = useState({ nameWood: '', quality:'', price: '' });

  const onSubmit = async () => {
    setFetching(true);  
    const woodsRef = collection(firestore, 'woods');
    const docRef = await addDoc(woodsRef, {
      ...wood,
      nameWood: capilalize.words(wood.nameWood),
      quality: capilalize.words(wood.quality),
      price: Number(wood.price),
    }).catch((error) => {
      alert(error);
    });
    setWood({ nameWood: '', quality:'', price: '' });
    setFetching(false);
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
              onChange={ e => setWood({ ...wood, nameWood: e.target.value })}
              type='text'
              required
              placeholder='Escribe el nombre de la madera'
            />
          </label>
        </p>
        <p>
          <label>
            Calidad
            <span>*</span><br></br>

            <input 
              type="radio" id="quality" name="woodQuality" value="especial"
              checked = {wood.quality === "especial" ? true : false}
              onChange={ e => setWood({ ...wood, quality: e.target.value })}
              />
            <label htmlFor="especial">Especial</label>

            <input 
              type="radio" 
              id="quality" 
              name="woodQuality" 
              value="primera" 
              checked = {wood.quality === "primera" ? true : false}
              onChange={ e => setWood({ ...wood, quality: e.target.value })}
              />
            <label htmlFor="primera">Primera</label>

            <input 
              type="radio" 
              id="quality" 
              name="woodQuality" 
              value="tercera"
              checked = {wood.quality === "tercera" ? true : false}  
              onChange={ e => setWood({ ...wood, quality: e.target.value })}
            />
            <label htmlFor="tercera">Tercera</label>
          </label>
        </p>
        <p>
          <label>
            Precio
            <input
              value={wood.price}
              onChange={ e => setWood({ ...wood, price: e.target.value })}
              type='number'
              required
              placeholder='Escribe el precio'
            />
          </label>
        </p>
        <Button onClick={onSubmit} disabled={fetching} label={fetching? 'Procesando' : 'Enviar' } />
        <p>
          <span> * </span>los campos son obligatorios.
        </p>
      </div>
    </div>
  );
}
