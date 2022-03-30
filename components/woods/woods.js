import { deleteDoc, doc } from 'firebase/firestore';
import Button from '../Button';
import { firestore } from '../firebase/client';

const Woods = ({ id, nameWood, price }) => {
  const deleteWood = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(firestore, 'woods', id);
    await deleteDoc(docRef).catch((error) => {
      alert(error);
    });
    alert(`Wood deleted: ${id}`);
  };

  return (
    <table key={id}>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>

        <tr>
          <td>{nameWood}</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>
            <Button onClick={(e) => deleteWood(id, e)} label="Eliminar" />
          </td>
          <td>
            <Button label="Editar" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Woods;
