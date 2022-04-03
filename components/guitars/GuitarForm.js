import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { firestore, storage } from '../firebase/client';
import capilalize from 'capitalize';

export const GuitarForm = () => {
  let downloadURL = '';
  const [fetching, setFetching] = useState(false);
  const [guitar, setGuitar] = useState({
    nameGuitar: '',
    details: '',
    price: '',
    image: '',
  });

  const onSubmit = async () => {
    setFetching(true);
    const guitarsRef = collection(firestore, 'guitars');
    const docRef = await addDoc(guitarsRef, {
      ...guitar,
      nameGuitar: capilalize.words(guitar.nameGuitar),
      details: guitar.details,
      price: Number(guitar.price),
      image: downloadURL,
    }).catch((error) => {
      alert(error);
    });
    setGuitar({ nameGuitar: '', details: '', price: '', image: '' });
    setFetching(false);
    alert(`Guitar added: ${docRef.nameGuitar}`);
  };

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, `guitars/${file.name}`);
    const uploadTask = await uploadBytes(fileRef, file);
    downloadURL = await getDownloadURL(fileRef);
  };

  return (
    <>
      <h1 className=" underline decoration-sky-500 mt-4 antialiased text-3xl">
        Formulario Guitarras
      </h1>
      <div className="flex justify-start items-center">
        <div className="form-control mt-2">
          <label className="input-group m-2">
            <span>Nombre</span>
            <input
              value={guitar.nameGuitar}
              onChange={(e) =>
                setGuitar({ ...guitar, nameGuitar: e.target.value })
              }
              type="text"
              required
              placeholder="Nombre de la guitarra"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Descripción</span>
            <textarea
              value={guitar.details}
              onChange={(e) =>
                setGuitar({ ...guitar, details: e.target.value })
              }
              type="text"
              required
              placeholder="Descripción de la guitarra"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Precio</span>
            <input
              value={guitar.price}
              onChange={(e) => setGuitar({ ...guitar, price: e.target.value })}
              type="number"
              required
              placeholder="Precio de la guitarra"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Imagen</span>
            <input
              onChange={fileHandler}
              type="file"
              required
              placeholder="Imagen de la guitarra"
              className="input input-bordered"
            />
          </label>
          <button
            onClick={onSubmit}
            className="btn btn-outline"
            disabled={fetching}
          >
            {fetching ? 'Subiendo...' : 'Subir'}
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};
