import Button from "../../components/Button";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { authentication } from "../../components/firebase/client";


export default function Login() {
  const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return <Button style="" onClick={signInWithGoogle} label='Login with Google'/>;
}