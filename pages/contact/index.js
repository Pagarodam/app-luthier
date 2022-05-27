import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Titles from 'components/UI/Titles';
import { useSession } from 'next-auth/react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Modal from 'components/UI/Modal';
import { useState } from 'react';

const YOUR_SERVICE_ID = "service_f8rxnni"; 
const YOUR_TEMPLATE_ID = "template_rlpjg1g"; 
const YOUR_PUBLIC_KEY = "A2OVbYSw93fWdGMU5"

const Contact = () => {
  const form = useRef();
  const{data: session, status} = useSession();
  const {id="", name="", email="" }=  session?.user || {};
  const [message, setMessage]= useState("");

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          setMessage("Mensaje enviado correctamente");
          e.target.reset();
      }, (error) => {
          setMessage(error.text);
      });
  };
  const closeMessageHandler=()=>{
    setMessage("");
  }

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
      <Titles label={'Formulario de contacto'} />
      <div className={`p-4 border-4 rounded-xl text-white m-3 bg-[url('/assets/lutier.jpg')]`}>
        <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
        <form ref={form} onSubmit={sendEmail} className={'p-4'}>
          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Nombre*: '}
              type="text"
              name="name"
              value={name !== "" ? name : null}
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
              value={email !== "" ? email : null}
              required="required"
              placeholder="Escribe tu Email"
            />
          </div>

          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Telefono: '}
              type="tel"
              name="phone"
              id="telefono"
              placeholder="Escribe tu teléfono"
            />
          </div>

          <div className="input-group m-2">
            <Input
              className={'input input-bordered'}
              label={'Asunto*: '}
              type="text"
              name="subject"
              id="asunto"
              required="required"
              placeholder="Escribe un asunto"
            />
          </div>

          <div className="input-group m-2">
            <label className="p-3">Mensaje*:</label>
            <textarea
              className={' input input-bordered'}
              name="message"
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
      </div>
    </>
  );
};
export default Contact;
