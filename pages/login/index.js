import { LoginFacebook, LoginGoogle, LoginMail, Logout } from "../../components/login";
import Button from "../../components/Button";

import { authentication } from "../../components/firebase/client";
import { useState } from "react/cjs/react.production.min";
import { onAuthStateChanged } from "firebase/auth";

export default function Login(){
  return (
    <>
      <LoginMail/>
      <LoginGoogle/>
      <LoginFacebook/>
    </>
  )
}