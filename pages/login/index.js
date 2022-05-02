import { signIn } from 'next-auth/react';

export default function Login({ providers, session }) {
  return (
    <>
      <button onClick={() => signIn('google')}>google</button>
      {/* <LoginMail />
      <div className="flex flex-col justify-center items-center content-center justify-items-center m-20 w-200">
        <h3 className="text-center mb-10">También puedes loguearte con:</h3>
        <LoginGoogle />
        <LoginFacebook />
      </div> */}
    </>
  );
}
