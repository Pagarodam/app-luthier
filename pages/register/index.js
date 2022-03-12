import { useState } from "react";
import Link from "next/link";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../components/firebase/client";
import { useRouter } from "next/router";

export default function Register() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
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
      push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="form-signin">
          <h1 className="text-center text-login">Registra tu cuenta</h1>
          <div className="center">
            <input
              name="email"
              type="text"
              className="input-form"
              placeholder="Correo"
              onChange={changeUser}
            />
          </div>
          <div className="center">
            <input
              name="password"
              type="password"
              className="input-form"
              placeholder="Contraseña"
              onChange={changeUser}
            />
          </div>
          <br />
          <div className="center">
            <button
              className="button-signup fondo-color-signup"
              onClick={registerUser}
            >
              Registrarse
            </button>
          </div>
          <p className="text-center">O también</p>
          <br />
          <p className="text-center">
            ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
}
