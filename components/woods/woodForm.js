import {
  addDoc,
  collection,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase/client';
import capilalize from 'capitalize';
import { fileHandler } from '../firebase/utils';
import Input from '../UI/Input';
import { CONSTANTS } from '@firebase/util';

export default function WoodForm() {
  const [fetching, setFetching] = useState(false);
  const [wood, setWood] = useState({
    nameWood: '',
    quality: '',
    price: '',
  });

  const onSubmit = async () => {
    setFetching(true);
    const woodsRef = collection(firestore, 'woods');
    const woodUrl = await fileHandler(wood.image, 'woods');
    const docRef = await addDoc(woodsRef, {
      ...wood,
      nameWood: capilalize.words(wood.nameWood),
      quality: capilalize.words(wood.quality),
      price: Number(wood.price),
      image: woodUrl,
    }).catch((error) => {
      alert(error);
    });
    setWood({ nameWood: '', quality: '', price: '', image: '' });

    setFetching(false);
    alert(`Wood added: ${docRef.id}`);
  };

  const woodNameChangeHandler = (event) => {
    setWood({ ...wood, nameWood: event.target.value });
  };

  const woodQualityChangeHandler = (event) => {
    setWood({ ...wood, quality: event.target.value });
  };

  const woodPriceChangeHandler = (event) => {
    setWood({ ...wood, price: event.target.value });
  };

  const woodImageChangeHandler = (event) => {
    setWood({ ...wood, image: event.target.files[0] });
  };

  return (
    <>
      <h1 className="underline decoration-sky-500 mt-4 antialiased text-3xl">
        Formulario Maderas
      </h1>
      <div className="flex justify-start items-center">
        <div className="form-control mt-2">
          <div className="input-group m-2">
            <Input
              id="nameWood"
              label="Nombre"
              type="text"
              value={wood.nameWood}
              onChange={woodNameChangeHandler}
            />
          </div>
          <div className="input-group m-2">
            <span>Calidad</span>
            <Input
              id="quality"
              label="Calidad"
              type="radio"
              value="especial"
              onChange={woodQualityChangeHandler}
              className="radio mr-2"
              checked={wood.quality === 'especial' ? true : false}
            />
            <label htmlFor="especial" className="mr-2">
              Especial
            </label>
            <Input
              id="quality"
              type="radio"
              value="primera"
              onChange={woodQualityChangeHandler}
              className="radio mr-2"
              checked={wood.quality === 'primera' ? true : false}
            />
            <label htmlFor="primera" className="mr-2">
              Primera
            </label>
            <Input
              id="quality"
              type="radio"
              value="tercera"
              onChange={woodQualityChangeHandler}
              className="radio mr-2"
              checked={wood.quality === 'tercera' ? true : false}
            />
            <label htmlFor="tercera">Tercera</label>
          </div>
          <div className="input-group m-2">
            <Input
              id="price"
              label="Precio"
              type="number"
              value={wood.price}
              placeholder="Escriba el precio"
              onChange={woodPriceChangeHandler}
            />
            <span>€</span>
          </div>
          <div className="input-group m-2">
            <input
              onChange={woodImageChangeHandler}
              type="file"
              required
              className="input input-bordered"
            />
          </div>
          <button onClick={onSubmit} disabled={fetching} className="btn">
            {fetching ? 'Procesando' : 'Enviar'}
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
