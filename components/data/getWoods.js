import { useState } from 'react';

const GetWoods = () => {
  const [woods, setWoods] = useState([]);

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
  return woods;
};

export default GetWoods;
