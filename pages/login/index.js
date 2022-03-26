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
      <div className={styles.container}>
        <LoginMail />
        <LoginGoogle />
        <LoginFacebook />
      </div>
    </>
  );
}
