import { useSession, getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (typeof window === 'undefined') return null;
  if (session) {
    router.push('/');
    return null;
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn('google')}
      >
        Login
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
