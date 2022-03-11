import Button from "../../components/Button";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { authentication } from "../../components/firebase/client";
import { useRouter } from "next/router";


//Google Login
export default function Login() {

  const { push } = useRouter();

  const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=>{
      console.log(res);
      push("/about");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return <Button style="" onClick={signInWithGoogle} label='Login with Google'/>;
}

//Email Login
