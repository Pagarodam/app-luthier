import { addDoc, collection, ref, uploadBytes, getDownloadURL } from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase/client';
import capilalize from 'capitalize';
import { fileHandler } from '../firebase/utils';

export default function WoodForm() {
  const [fetching, setFetching] = useState(false);
  const [wood, setWood] = useState({});

  const onSubmit = async () => {
    setFetching(true);
    const woodsRef = collection(firestore, 'woods');
    const woodUrl = await fileHandler(wood.image, 'woods');
    const docRef = await addDoc(woodsRef, {
      ...wood,
      nameWood: capilalize.words(wood.nameWood),
      quality: capilalize.words(wood.quality),
      price: Number(wood.price),
      image: woodUrl
    }).catch((error) => {
      alert(error);
    });
    setWood({ nameWood: '', quality: '', price: '' , image:''});

    setFetching(false);
    alert(`Wood added: ${docRef.id}`);
  };

  return (
    <>
      <h1 className=" underline decoration-sky-500 mt-4 antialiased text-3xl">
        Formulario Maderas
      </h1>
      <div className="flex justify-start items-center">
        <div className="form-control mt-2">
          <label className="input-group m-2">
            <span>Nombre</span>
            <input
              value={wood.nameWood}
              onChange={(e) => setWood({ ...wood, nameWood: e.target.value })}
              type="text"
              required
              placeholder="Nombre de la madera"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Calidad</span>
            <input
              type="radio"
              id="quality"
              name="woodQuality"
              value="especial"
              checked={wood.quality === 'especial' ? true : false}
              onChange={(e) => setWood({ ...wood, quality: e.target.value })}
              className="radio mr-2"
            />
            <label htmlFor="especial" className="mr-2">
              Especial
            </label>
            <input
              type="radio"
              id="quality"
              name="woodQuality"
              value="primera"
              checked={wood.quality === 'primera' ? true : false}
              onChange={(e) => setWood({ ...wood, quality: e.target.value })}
              className="radio mr-2"
            />
            <label htmlFor="primera" className="mr-2">
              Primera
            </label>
            <input
              type="radio"
              id="quality"
              name="woodQuality"
              value="tercera"
              checked={wood.quality === 'tercera' ? true : false}
              onChange={(e) => setWood({ ...wood, quality: e.target.value })}
              className="radio mr-2"
            />
            <label htmlFor="tercera">Tercera</label>
          </label>
          <label className="input-group m-2">
            <span>Price</span>
            <input
              value={wood.price}
              onChange={(e) => setWood({ ...wood, price: e.target.value })}
              type="number"
              required
              placeholder="Escriba el precio"
              className="input input-bordered"
            />
            <span>€</span>
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Imagen</span>
            <input
              onChange={e => setWood({ ...wood, image: e.target.files[0] })}
              type="file"
              required
              placeholder="Imagen de la madera"
              className="input input-bordered"
            />
          </label>
          <button onClick={onSubmit} disabled={fetching} className="btn">
            {fetching ? 'Procesando' : 'Enviar'}
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
