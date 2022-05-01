import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  getAuth,
  FacebookAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { authentication } from '../../components/firebase/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

//Google Login
export function LoginGoogle() {
  const { push } = useRouter();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
        push('/about');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={signInWithGoogle} className="btn btn-outline m-2">
        <FcGoogle />
        oogle
      </button>
    </>
  );
}

//Email Login
export function LoginMail() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { push } = useRouter();

  const [user, setUser] = useState({});

  onAuthStateChanged(authentication, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authentication,
        loginEmail,
        loginPassword,
      );
      push('/about');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center m-4 underline decoration-sky-500 mt-4 antialiased text-3xl">
        LOGIN
      </h1>
      <div className="flex justify-center items-center">
        <div className="form-control">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered mb-2"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered mb-2"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          ></input>
          <button onClick={login} className="btn btn-outline">
            login
          </button>
        </div>
      </div>
    </>
  );
}

//Facebook Login
export function LoginFacebook() {
  const { push } = useRouter();

  const singnInWithFacebook = () => {
    const provider = new FacebookAuthProvider();

    const auth = getAuth();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
        push('/about');
        const user = res.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <button className="btn btn-outline m-2" onClick={singnInWithFacebook}>
      <FaFacebookF />
      acebook
    </button>
  );
}
