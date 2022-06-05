import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Input from 'components/UI/Input';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'components/UI/Button';
import SingleviewList from 'components/singleView/SingleViewList';
import Titles from 'components/UI/Titles';

const INITIAL_STATE = {
  street: '',
  number: '',
  city: '',
  cp: ''
};

const Profile = () => {
  const [orders, setOrders] = useState(['']);
  const [products, setProducts] = useState(['']);
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const n = 0;
  const [address, setAddress] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { id, email, rol, image } = session.user;

    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address
      })
    });
    const data = await response.json();
  };

  const getOrders = async () => {
    await fetch('/api/cart')
      .then((res) => res.json())
      .then((res) => setOrders(res.data));
    show ? setShow(false) : setShow(true);
  };

  const getSingleOrder = (products) => {
    const productsList = products.map((product) => {
      <p>{product.id}</p>;
    });
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
      <h1>{JSON.stringify(address)}</h1>
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
            <Button
              label={'Guardar'}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-box my-5"
            />
            <Button
              label={'Pedidos'}
              onClick={getOrders}
              className="bg-blue-500 text-white p-2 rounded-box my-5"
            />
          </div>
        </form>
      </div>
      {show && <Titles label={`Pedidos de ${session.user.name}`} />}
      {show &&
        orders.map((order) => {
          n = n + 1;
          return (
            <>
              <SingleviewList n={n} onClick={getSingleOrder} order={order} />
            </>
          );
        })}
    </>
  );
};

export default Profile;
