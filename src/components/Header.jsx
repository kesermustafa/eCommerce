import React, {useContext, useState} from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import {BasketContext} from "../context/basketContext.jsx";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  // State to track the current active item
  const [currentPath, setCurrentPath] = useState('/');

  const {basket} = useContext(BasketContext);

  const totalProducts = basket.reduce((a, b) => a + b.amount, 0);



  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-0 max-w-[1280px]">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <img
                  alt="Your Company"
                  src="/src/assets/img/logo.png"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setCurrentPath(item.href)} // Update the current path on click
                    aria-current={
                      currentPath === item.href ? 'page' : undefined
                    }
                    className={classNames(
                      currentPath === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to={'/basket'}>
              <div className="relative flex items-center text-gray-300 group hover:bg-gray-700 px-2 py-1 rounded-md hover:text-white cursor-pointer font-semibold">
                {/* Basket text */}
                <span className="mr-1 group-hover:text-white">Basket</span>
                {/* Notification button */}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 group-hover:text-white focus:outline-none"
                >

                  {basket.length > 0 && <span
                      className="absolute top-[-10px] left-2 text-blue-600 font-bold bg-gray-200 px-[7px] rounded-full ">{totalProducts}</span>}

                  <BsCart4
                      aria-hidden="true"
                      className="h-7 w-7 group-hover:text-white relative z-10"
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setCurrentPath(item.href)} // Update the current path on click
              aria-current={currentPath === item.href ? 'page' : undefined}
              className={classNames(
                currentPath === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
