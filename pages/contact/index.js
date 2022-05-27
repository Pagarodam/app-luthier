import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Titles from 'components/UI/Titles';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// const USER = {
//   id: '',
//   email: '',
//   name: '',
//   rol: '',
//   image: ''
// };

const Contact = () => {
  // console.log(session.user);
  const id = 'id';
  const [sesion, setSesion] = useState({});

  useEffect((session) => {
    async function getUserSession() {
      session = await getSession();
    }
    getUserSession();
  }),
    [];
  setSesion(session);
  console.log(sesion);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('conforme');
  };

  return (
    <>
      {/* <Titles label={'Formulario de contacto'} />
      <div className={`p-4 border-4 rounded-xl m-3`}>
        <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
        <form onSubmit={onSubmit} className={'p-4'}>
          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Nombre*: '}
              type="text"
              name="name"
              // value={name ? name : ''}
              id="nombre"
              required="required"
              placeholder="Escribe tu nombre"
            />
          </div>

          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'eMail*: '}
              type="email"
              name="email"
              id="email"
              // value={email ? email : ''}
              required="required"
              placeholder="Escribe tu Email"
            />
          </div>

          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Telefono: '}
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Escribe tu teléfono"
            />
          </div>

          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Asunto*: '}
              type="text"
              name="asunto"
              id="assunto"
              required="required"
              placeholder="Escribe un asunto"
            />
          </div>

          <div className="input-group m-2">
            <label className="p-3">Mensaje*:</label>
            <textarea
              className={' input input-bordered'}
              name="mensaje"
              id="mensaje"
              required="obligatorio"
              placeholder="Deja aquí tu comentario..."
            ></textarea>
          </div>
          <div>
            <Button
              label={'Enviar'}
              className={
                'bg-green-500 rounded-sm p-2 text-white hover:cursor-pointer hover:bg-green-700'
              }
              type="submit"
              name="enviar"
              id="enviar"
            />
            <span> * </span>los campos son obligatorios.
          </div>
        </form>
      </div> */}
    </>
  );
};
export default Contact;
