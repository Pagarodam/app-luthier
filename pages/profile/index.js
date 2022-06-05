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
    const { id } = session.user;

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
    const { id, role } = session.user;

    await fetch(`/api/cart/${role === 'admin' ? '' : id}`)
      .then((res) => res.json())
      .then((res) => setOrders(res.data));
    show ? setShow(false) : setShow(true);
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
      <section className="relative py-16 bg-gray-300 mx-10 rounded">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-30">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Image
                      src={session.user.image}
                      width={100}
                      height={100}
                      alt="profile"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                  {session.user.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                  {session.user.address.city}
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  {session.user.address.street}
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  {session.user.address.cp}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-10">
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
      {show && (
        <Titles
          label={
            session?.user?.role === 'admin'
              ? 'Todos los pedidos'
              : ` Pedidos de ${session.user?.name}`
          }
        />
      )}

      {show &&
        orders.map((order) => {
          return (
            <>
              <SingleviewList key={order.id} order={order} />
            </>
          );
        })}
    </>
  );
};

export default Profile;
