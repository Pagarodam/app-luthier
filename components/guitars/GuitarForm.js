import { useState } from 'react';
import capilalize from 'capitalize';
import Image from 'next/image';

export const GuitarForm = () => {
  const initialValues = {
    name: '',
    description: '',
    price: '',
    image: '',
    tapa: '626c2d99deb18716cc438c3f',
    aro: '626c2d99deb18716cc438c3f',
    fondo: '626c2d99deb18716cc438c3f',
    diapason: '626c2d99deb18716cc438c3f',
  };

  const [guitar, setGuitar] = useState({
    ...initialValues,
  });

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('/api/guitars', {
        method: 'POST',
        body: JSON.stringify(guitar),
        headers: {
          Accecpt: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      alert(`Guitar ${guitar.name} has been added`);
    } catch (error) {
      alert(error);
    }
  };

  const guitarNameChangeHandler = (event) => {
    setGuitar({ ...guitar, name: capilalize(event.target.value) });
  };

  const guitarImageChangeHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setGuitar({ ...guitar, image: reader.result });
      };
    }
  };

  const guitarDescriptionChangeHandler = (event) => {
    setGuitar({ ...guitar, description: capilalize(event.target.value) });
  };

  const guitarPriceChangeHandler = (event) => {
    setGuitar({ ...guitar, price: +event.target.value });
  };

  const guitarTapaChangeHandler = (event) => {
    setGuitar({ ...guitar, tapa: event.target.value });
  };

  const guitarAroChangeHandler = (event) => {
    setGuitar({ ...guitar, aro: event.target.value });
  };

  const guitarFondoChangeHandler = (event) => {
    setGuitar({ ...guitar, fondo: event.target.value });
  };

  const guitarDiapasonChangeHandler = (event) => {
    setGuitar({ ...guitar, diapason: event.target.value });
  };

  return (
    <>
      <h1 className="underline decoration-sky-500 mt-4 antialiased text-3xl">
        Formulario Guitarras
      </h1>
      <div className="flex justify-start items-center">
        <form
          className="form-control mt-2"
          method="post"
          onSubmit={handlerOnSubmit}
        >
          <label className="input-group m-2">
            <span>Nombre</span>
            <input
              name="name"
              value={guitar.name}
              onChange={guitarNameChangeHandler}
              type="text"
              placeholder="Nombre de la guitarra"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Descripción</span>
            <textarea
              name="description"
              value={guitar.description}
              onChange={guitarDescriptionChangeHandler}
              type="text"
              placeholder="Descripción de la guitarra"
              className="input input-bordered"
            />
          </label>
          <label className="input-group m-2">
            <span className="mr-2">Precio</span>
            <input
              name="price"
              value={guitar.price}
              onChange={guitarPriceChangeHandler}
              type="number"
              placeholder="Precio de la guitarra"
              className="input input-bordered"
            />
          </label>

          <label className="input-group m-2">
            <span className="mr-2">Imagen</span>
            <input
              name="image"
              onChange={guitarImageChangeHandler}
              type="file"
              placeholder="Imagen de la guitarra"
              className="input input-bordered"
            />
          </label>
          <button className="btn btn-outline m-2">Subir</button>
        </form>
      </div>
      <div className="divider"></div>
    </>
  );
};
