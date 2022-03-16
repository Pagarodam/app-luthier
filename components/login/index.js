import Button from "../../components/Button";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { authentication } from "../../components/firebase/client";
import { useRouter } from "next/router";
import { getAuth, FacebookAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import styles from '../../styles/Home.module.css';

//Google Login
export function LoginGoogle() {

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
export function LoginMail(){
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const { push } = useRouter();

    const [ user, setUser ] = useState({});


    onAuthStateChanged(authentication, (currentUser) => {
        setUser(currentUser);
    })

    

    const login = async ()=> {
        try{
            const user = await signInWithEmailAndPassword(
                authentication,
                loginEmail,
                loginPassword
            );
            push("/about");
        }catch(error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className={styles.signin}>
                <h1>LOGIN</h1>
                <input 
                    type="email" 
                    placeholder="Email..."
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                ></input>
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }} 
                ></input>
                <Button 
                    style="" 
                    onClick={ login }  
                    label='Login'
                />
                <Button 
                    style="" 
                    onClick={ logout } 
                    label="Sign Out"
                />
                <h4>User Logged In: </h4>
                {user?.email}
            </div>
        </>
    )
}

export const logout = async ()=> {
  await signOut(authentication);
};

//Facebook Login
export function LoginFacebook(){

  const { push } = useRouter();

  const singnInWithFacebook = ()=> {
    const provider = new FacebookAuthProvider();
   

  const auth = getAuth();
  signInWithPopup(authentication, provider)
    .then((res) => {
      console.log(res);
      push("/about");
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
  }
  return <Button style="" onClick={singnInWithFacebook} label='Login with Facebook'/>;
}
