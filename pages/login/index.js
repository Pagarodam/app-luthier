import { LoginFacebook, LoginGoogle, LoginMail, Logout } from "../../components/login";
import styles from '../../styles/Home.module.css'
import Nav from "../../components/nav";

export default function Login(){
  return (
    <>
      <div className={styles.container}>
        <Nav></Nav>
        <LoginMail/>
        <LoginGoogle/>
        <LoginFacebook/>
      </div>
    </>
  )
}