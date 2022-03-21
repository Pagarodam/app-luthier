import { getProviders, getSession, signIn, signOut } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function Login({ providers }) {
  return (
    <div>
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <FcGoogle
              fontSize={30}
              cursor='pointer'
              onClick={() => signIn(provider.id)}
            />
            <span>Entra desde {provider.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const providers = await getProviders();

  const session = await getSession({ req });

  if (session && res) {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return {
      props: {
        session,
        providers,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
}
