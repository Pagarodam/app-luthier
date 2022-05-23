import CartContext from 'components/store/cart-context';
import Input from 'components/UI/Input';
import { useContext } from 'react';
import GuitarCardForm from './GuitarCardForm';

const GuitarComponentsInput = ({
  guitarComponents,
  price,
  name,
  aro,
  fondo,
  tapa,
  diapason,
}) => {
  console.log(guitarComponents, 'guitarComponents');

  const cartCtx = useContext(CartContext);

  function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
  }

  const id = aleatorio(0, 100000000);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name + id,
      amount: amount,
      price: price,
      aro: aro,
      fondo: fondo,
      tapa: tapa,
      diapason: diapason,
    });
  };

  return (
    <>
      <div>
        <div className="input-group m-2">
          <Input
            id="tapa"
            label="Tapa"
            type="text"
            readOnly
            required
            value={guitarComponents?.tapa?.nameWood}
          />
        </div>
        <div className="input-group m-2">
          <Input
            id="aro"
            label="Aro"
            type="text"
            readOnly
            required
            value={guitarComponents?.aro?.nameWood}
          />
        </div>
        <div className="input-group m-2">
          <Input
            id="fondo"
            label="Fondo"
            type="text"
            readOnly
            required
            value={guitarComponents?.fondo?.nameWood}
          />
        </div>
        <div className="input-group m-2">
          <Input
            id="diapason"
            label="Diapason"
            type="text"
            readOnly
            required
            value={guitarComponents?.diapason?.nameWood}
          />
        </div>
        <div className="input-group m-2">
          <Input
            id="precio"
            label="Precio"
            value={price ? price : 200}
            readOnly
            type="number"
            placeholder="Precio de la guitarra"
            className="input input-bordered"
          />
        </div>
      </div>
      <div>
        <GuitarCardForm onAddToCart={addToCartHandler} />
      </div>
    </>
  );
};
export default GuitarComponentsInput;
