import {
  LoginFacebook,
  LoginGoogle,
  LoginMail,
  Logout,
} from '../../components/login';
import styles from '../../styles/Home.module.css';

export default function Login({ providers }) {
  return (
    <>
      <LoginMail />
      <div className="flex flex-col justify-center items-center content-center justify-items-center m-20 w-200">
        <h3 className="text-center mb-10">También puedes loguearte con:</h3>
        <LoginGoogle />
        <LoginFacebook />
      </div>
    </>
  );
}
