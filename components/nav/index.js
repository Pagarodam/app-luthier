import { useState, useContext } from 'react';
import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';
import HeaderCartButton from 'components/layout/HeaderCartButton';
import CartContext from 'components/store/cart-context';

const Navbar = ({ onShowCart }) => {
  const [showNav, setShowNav] = useState(false);
  const { data: session, status } = useSession();
  const { cleanCart } = useContext(CartContext);

  const handleSignOut = () => {
    signOut();
    cleanCart();
  };

  return (
    <header className="flex items-center p-3 flex-wrap text-white bg-blue-900 sticky top-0 z-10">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
          <a>Luthier</a>
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div
          className={
            'lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ' +
            (showNav ? '' : 'hidden')
          }
        >
          {session && session.user.role === 'admin' ? (
            <>
              <Link href="/admin/woods">
                <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
                  Maderas
                </a>
              </Link>
              <Link href="/admin/guitars">
                <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
                  Guitarras
                </a>
              </Link>
            </>
          ) : (
            <a className="d-none"></a>
          )}

          <Link href="/shop/guitars-configurator">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Compra
            </a>
          </Link>
          <Link href="/gallery">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Galeria
            </a>
          </Link>

          <Link href="/about">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded  hover:bg-gray-900">
              Quienes somos
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Contacto
            </a>
          </Link>
          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn m-1">
                {session.user.email}
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login">
              <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
                LogIn
              </a>
            </Link>
          )}
        </div>
      </div>
      <HeaderCartButton onClick={onShowCart} />
    </header>
  );
};

export default Navbar;
