import { useState, useEffect, useRef } from 'react';
import capilalize from 'capitalize';
import Input from '../UI/Input';
import Modal from 'components/UI/Modal';
import GuitarComponentsInput from './GuitarComponentsInputs';

const sumWithoutUndefineds = (...data) => {
  return data.reduce((prev, curr) => (curr ? prev + curr : prev), 0);
};

const INITIAL_VALUES = {
  name: '',
  description: '',
  price: 0,
  handJob: 300,
  shippingCosts: 250,
  image: '',
  tapa: {
    nameWood: '',
  },
  aro: {
    nameWood: '',
  },
  fondo: {
    nameWood: '',
  },
  diapason: {
    nameWood: '',
  },
  style: '',
};

const GuitarForm = ({ guitarComponents, onGuitarCreated }) => {
  const [message, setMessage] = useState('');
  const [guitar, setGuitar] = useState({
    ...INITIAL_VALUES,
  });

  useEffect(() => {
    setGuitar({
      ...guitar,
      ...guitarComponents,
      price: sumWithoutUndefineds(
        guitar.shippingCosts,
        guitar.handJob,
        guitarComponents.tapa?.price,
        guitarComponents.aro?.price,
        guitarComponents.fondo?.price,
        guitarComponents.diapason?.price,
      ),
    });
  }, [guitarComponents]);

  const fileInput = useRef(null);

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    // Esto funciona pero es una mierda es el numero de input que corresponde a la imagen
    event.target[5].value = null;

    const body = new FormData();
    body.append('file', guitar.image);
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body,
      });

      const res = await fetch('/api/guitars', {
        method: 'POST',
        body: JSON.stringify({
          ...guitar,
          tapa: guitar.tapa.id,
          aro: guitar.aro.id,
          fondo: guitar.fondo.id,
          diapason: guitar.diapason.id,
          price: Number(guitar.price),
          image: `/uploads/${guitar.image.name}`,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      setGuitar({ ...INITIAL_VALUES });
      onGuitarCreated({ ...res.data, ...guitar });
      setMessage(`${guitar.name} fué añadida`);
    } catch (error) {
      setMessage(error);
    }
  };

  const guitarNameChangeHandler = (event) => {
    setGuitar({ ...guitar, name: capilalize(event.target.value) });
  };

  const guitarStyleChangeHandler = (event) => {
    setGuitar({ ...guitar, style: event.target.value });
  };

  const guitarDescriptionChangeHandler = (event) => {
    setGuitar({ ...guitar, description: capilalize(event.target.value) });
  };

  const guitarImageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setGuitar({ ...guitar, image: i });
    }
  };

  const closeMessageHandler = () => {
    setMessage('');
  };

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
      <h1 className="underline decoration-sky-500 mt-4 antialiased text-3xl">
        Formulario Guitarras
      </h1>
      <div className="flex justify-start items-center">
        <form
          className="form-control mt-2 flex flex-row"
          method="post"
          onSubmit={handlerOnSubmit}
        >
          <div>
            <div className="input-group m-2">
              <Input
                id="name"
                label="Nombre"
                value={guitar.name}
                type="text"
                onChange={guitarNameChangeHandler}
                placeholder="Nombre de la guitarra"
                className="input input-bordered"
              />
            </div>

            <div className="input-group m-2">
              <span>Estilo</span>
              <Input
                id="flamenco"
                label="Flamenco"
                type="radio"
                value="flamenco"
                onChange={guitarStyleChangeHandler}
                className="radio mr-2"
                checked={
                  guitar.style.toLocaleLowerCase() === 'flamenco' ? true : false
                }
              />
              <label htmlFor="flamenco" className="mr-2">
                Flamenco
              </label>

              <Input
                id="Clasico"
                type="radio"
                value="clasico"
                onChange={guitarStyleChangeHandler}
                className="radio mr-2"
                checked={
                  guitar.style.toLocaleLowerCase() === 'clasico' ? true : false
                }
              />
              <label htmlFor="clasico" className="mr-2">
                Clasico
              </label>
            </div>

            <div className="input-group m-2">
              <Input
                id="description"
                label="Descripción"
                value={guitar.description}
                type="text"
                onChange={guitarDescriptionChangeHandler}
                placeholder="Descripción de la guitarra"
                className="input input-bordered"
              />
            </div>
            <div className="input-group m-2">
              <Input
                id="precio"
                label="Precio"
                value={guitar.price}
                readOnly
                type="number"
                placeholder="Precio de la guitarra"
                className="input input-bordered"
              />
            </div>
            <div className="input-group m-2">
              <Input
                id="image"
                label="Imagen"
                onChange={guitarImageChangeHandler}
                type="file"
                ref={fileInput}
                placeholder="Imagen de la guitarra"
                className="input input-bordered"
              />
            </div>
          </div>
          <GuitarComponentsInput guitarComponents={guitarComponents} />
        </form>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default GuitarForm;
