import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-gray-500">
          Inicia sesión para ver tu perfil
        </h1>
        <Link href="/login">
          <a className="text-blue-500">Iniciar sesión</a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>{JSON.stringify(session.user)}</h1>
      <div className="mx-10">
        <Image
          src={session.user.image}
          width={100}
          height={100}
          alt="profile"
          className="rounded-full mx-4"
          objectFit="cover"
        />
        <h2 className="mx-auto">{session.user.name}</h2>
        <p className="">{session.user.email}</p>
      </div>
    </>
  );
}
