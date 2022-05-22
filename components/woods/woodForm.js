import { useState, useRef, useEffect } from 'react';
import capilalize from 'capitalize';
import Input from '../UI/Input';
import Modal from '../UI/Modal';

const EMPTY_WOOD = {
  nameWood: '',
  quality: '',
  price: '',
  component: '',
  style: '',
  image: '',
};

const WoodForm = ({ onWoodAdded, woodToEdit, ...props }) => {
  const [fetching, setFetching] = useState(false);
  const [wood, setWood] = useState({ ...EMPTY_WOOD });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setWood({
      ...EMPTY_WOOD,
      ...woodToEdit,
    });
  }, [woodToEdit]);

  const fileInput = useRef(null);

  const onSubmit = async () => {
    setFetching(true);

    const body = new FormData();
    body.append('file', wood.image);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body,
    });

    fetch(`/api/woods${props.edit ? '/' + wood.id : ''}`, {
      method: props.edit ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...wood,
        nameWood: capilalize.words(wood.nameWood),
        quality: capilalize.words(wood.quality),
        style: capilalize.words(wood.style),
        price: Number(wood.price),
        component: wood.component,
        image: `/uploads/${wood.image.name}`,
      }),
    })
      .then((res) => {
        props.onEdit();
        fileInput.current.value = '';
        setWood({ ...EMPTY_WOOD });

        setFetching(false);
        setMessage('Añadida correctamente');
        onWoodAdded();
      })
      .catch((err) =>
        setMessage(
          'Upps, vaya algo ha fallado. No se ha podido añadir la madera (Todo mal)',
          err,
        ),
      );
  };

  const closeMessageHandler = () => {
    setMessage('');
  };

  const woodNameChangeHandler = (event) => {
    setWood({ ...wood, nameWood: event.target.value });
  };

  const woodQualityChangeHandler = (event) => {
    setWood({ ...wood, quality: event.target.value });
  };

  const woodStyleChangeHandler = (event) => {
    setWood({ ...wood, style: event.target.value });
  };

  const woodPriceChangeHandler = (event) => {
    setWood({ ...wood, price: event.target.value });
  };

  const woodImageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setWood({ ...wood, image: i });
    }
  };

  const componentChangeHandler = (event) => {
    setWood({ ...wood, component: event.target.value });
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
        Formulario Maderas
      </h1>
      <div className="flex justify-start items-center">
        <form className="form-control mt-2">
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
              checked={
                wood.quality.toLocaleLowerCase() === 'especial' ? true : false
              }
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
              checked={
                wood.quality.toLocaleLowerCase() === 'primera' ? true : false
              }
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
              checked={
                wood.quality.toLocaleLowerCase() === 'tercera' ? true : false
              }
            />
            <label htmlFor="tercera">Tercera</label>
          </div>

          <div className="input-group m-2">
            <span>Componentes</span>
            <Input
              id="component"
              label="Tapa"
              type="radio"
              value="tapa"
              onChange={componentChangeHandler}
              className="radio mr-2"
              checked={wood.component === 'tapa' ? true : false}
            />
            <label htmlFor="tapa" className="mr-2">
              Tapa
            </label>
            <Input
              id="component"
              type="radio"
              value="aro"
              onChange={componentChangeHandler}
              className="radio mr-2"
              checked={wood.component === 'aro' ? true : false}
            />
            <label htmlFor="aro" className="mr-2">
              Aro
            </label>
            <Input
              id="component"
              type="radio"
              value="fondo"
              onChange={componentChangeHandler}
              className="radio mr-2"
              checked={wood.component === 'fondo' ? true : false}
            />
            <label htmlFor="fondo">Fondo</label>

            <Input
              id="component"
              type="radio"
              value="diapason"
              onChange={componentChangeHandler}
              className="radio mr-2"
              checked={wood.component === 'diapason' ? true : false}
            />
            <label htmlFor="fondo">Diapasón</label>
          </div>

          <div className="input-group m-2">
            <span>Estilo</span>
            <Input
              id="flamenco"
              label="Flamenco"
              type="radio"
              value="flamenco"
              onChange={woodStyleChangeHandler}
              className="radio mr-2"
              checked={
                wood.style.toLocaleLowerCase() === 'flamenco' ? true : false
              }
            />
            <label htmlFor="flamenco" className="mr-2">
              Flamenco
            </label>

            <Input
              id="Clasico"
              type="radio"
              value="clasico"
              onChange={woodStyleChangeHandler}
              className="radio mr-2"
              checked={
                wood.style.toLocaleLowerCase() === 'clasico' ? true : false
              }
            />
            <label htmlFor="clasico" className="mr-2">
              Clasico
            </label>

            <Input
              id="custom"
              type="radio"
              value="custom"
              onChange={woodStyleChangeHandler}
              className="radio mr-2"
              checked={
                wood.style.toLocaleLowerCase() === 'custom' ? true : false
              }
            />
            <label htmlFor="custom">Custom</label>
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
              ref={fileInput}
            />
          </div>
          {props.edit ? (
            <>
              <button
                onClick={onSubmit}
                disabled={fetching}
                className="btn btn-primary"
              >
                {'Editar'}
              </button>
              <button onClick={props.onEdit} className="btn btn-secondary">
                {'Cancelar'}
              </button>
            </>
          ) : (
            <button
              onClick={onSubmit}
              disabled={fetching}
              className="btn btn-primary"
            >
              {fetching ? 'Procesando' : 'Enviar'}
            </button>
          )}
        </form>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default WoodForm;
