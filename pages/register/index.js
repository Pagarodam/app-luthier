import { useState } from 'react';
import Link from 'next/link';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';
import { getProviders, getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function Register() {
  const [Credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { push } = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        authentication,
        Credentials.email,
        Credentials.password
      );
      push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className='form-signin'>
          <h1 className='text-center text-login'>Registra tu cuenta</h1>
          <div className='center'>
            <input
              name='email'
              type='text'
              className='input-form'
              placeholder='Correo'
              onChange={changeUser}
            />
          </div>
          <div className='center'>
            <input
              name='password'
              type='password'
              className='input-form'
              placeholder='Contraseña'
              onChange={changeUser}
            />
          </div>
          <br />
          <div className='center'>
            <button
              className='button-signup fondo-color-signup'
              onClick={registerUser}
            >
              Registrarse
            </button>
          </div>
          <p className='text-center'>O también</p>
          <br />
          <p className='text-center'>
            ¿Ya tienes cuenta? <Link href='/login'>Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
}
