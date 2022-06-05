import { useSession, getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div className="grid place-items-center h-48">
        <h1 className="text-center m-4 underline decoration-sky-500 mt-4 antialiased text-3xl">
          LOGIN
        </h1>
        <button
          className="px-10 py-2 text-base text-white bg-blue-500 rounded shadow focus:outline-none hover:bg-blue-400"
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <FcGoogle />
          Sign In with Google
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context)
    }
  };
}
