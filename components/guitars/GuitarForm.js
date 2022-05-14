import { useState, useEffect } from 'react';
import capilalize from 'capitalize';
import Input from '../UI/Input';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';

const sumWithoutUndefineds = (...data) => {
  return data.reduce((prev, curr) => (curr ? prev + curr : prev), 0);
};

const GuitarForm = ({ guitarComponents, onGuitarCreated }) => {
  const [message, setMessage] = useState('');
  const initialValues = {
    name: '',
    description: '',
    price: 0,
    handJob: 300,
    shippingCosts: 250,
    image: '',
    tapa: '',
    aro: '',
    fondo: '',
    diapason: '',
    style: '',
  };
  const [guitar, setGuitar] = useState({
    ...initialValues,
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

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/guitars', {
        method: 'POST',
        body: JSON.stringify({
          ...guitar,
          tapa: guitar.tapa.id,
          aro: guitar.aro.id,
          fondo: guitar.fondo.id,
          diapason: guitar.diapason.id,
          price: Number(guitar.price),
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      setMessage(`${guitar.name} fué añadida`);

      onGuitarCreated({ ...res.data, ...guitar });
      console.log('preInitial', initialValues);
      setGuitar(initialValues);
      console.log('postInitial', initialValues);
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
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setGuitar({ ...guitar, image: reader.result });
      };
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
                placeholder="Imagen de la guitarra"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <div className="input-group m-2">
              <Input
                id="tapa"
                label="Tapa"
                type="text"
                readOnly
                required
                value={guitarComponents.tapa?.nameWood}
              />
            </div>
            <div className="input-group m-2">
              <Input
                id="aro"
                label="Aro"
                type="text"
                readOnly
                required
                value={guitarComponents.aro?.nameWood}
              />
            </div>
            <div className="input-group m-2">
              <Input
                id="fondo"
                label="Fondo"
                type="text"
                readOnly
                required
                value={guitarComponents.fondo?.nameWood}
              />
            </div>
            <div className="input-group m-2">
              <Input
                id="diapason"
                label="Diapason"
                type="text"
                readOnly
                required
                value={guitarComponents.diapason?.nameWood}
              />
            </div>
          </div>
          <div>
            <Button
              className={
                'bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'
              }
              type="submit"
              label={'Subir'}
              disabled={false}
            />
          </div>
        </form>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default GuitarForm;
