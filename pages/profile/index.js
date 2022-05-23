import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from 'components/UI/Input';
import Link from 'next/link';
import Image from 'next/image';

const INITIAL_STATE = {
  street: '',
  number: '',
  city: '',
  cp: '',
};

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [address, setAddress] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { id, email, rol, image } = session.user;
    try {
      const user = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          rol,
          image,
          address,
        }),
      });
      const data = await user.json();
      if (data.success) {
        router.push('/profile');
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

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
          className="rounded-full m-4"
          objectFit="cover"
        />
        <h2 className="mx-auto">{session.user.name}</h2>
        <p className="">{session.user.email}</p>
        <p>{JSON.stringify(session.user.address)}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Input
              name="street"
              label="Calle"
              value={address.street}
              onChange={handleChange}
            />
            <Input
              name="number"
              label="Número"
              value={address.number}
              onChange={handleChange}
            />
            <Input
              name="city"
              label="Ciudad"
              value={address.city}
              onChange={handleChange}
            />
            <Input
              name="cp"
              label="Código Postal"
              value={address.cp}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-box my-5"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
