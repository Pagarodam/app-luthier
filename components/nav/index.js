import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../Auth';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { user } = useAuth();
  const { logOut } = useAuth();

  return (
    <header className="flex items-center p-3 flex-wrap text-white bg-blue-900">
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
          <Link href="/gallery/woods">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Maderas
            </a>
          </Link>
          <Link href="/gallery">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Galeria
            </a>
          </Link>

          <Link href="/about">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded  hover:bg-gray-900">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-gray-900">
              Contact Us
            </a>
          </Link>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabindex="0" class="btn m-1">
                {user.email}
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
                    onClick={logOut}
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
    </header>
  );
};

export default Navbar;
