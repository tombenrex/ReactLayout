import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
/* import './navbar.css'; */

export default function Navbar({ onSidebarOpen, isSidebarOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSidebarToggle = () => {
    onSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='fixed top-0 w-full bg-gray-900 text-white flex items-center justify-between px-4 py-2 z-50'>
      <div className='flex items-center space-x-2'>
        <button
          className='p-2 bg-gray-800 text-white rounded-lg lg:hidden'
          onClick={handleSidebarToggle}
        >
          <Bars3Icon className='h-6 w-6 text-white' />
        </button>
        <img src={reactLogo} className='h-8' alt='React logo' />
      </div>

      <Link className='text-center mx-auto' to='/'>
        <h1 className='font-bold text-xl m-0'>F25 Borås YH - React Kurs</h1>
      </Link>

      <div className='flex items-center space-x-2'>
        <img src={viteLogo} className='h-8' alt='Vite logo' />
        <button
          className='p-2 bg-gray-800 text-white rounded-lg lg:hidden'
          type='button'
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls='navbarNav'
          aria-expanded={!isCollapsed}
          aria-label='Toggle navigation'
        >
          <ChevronDownIcon
            className={`h-6 w-6 text-white ${isCollapsed ? '' : 'rotate-180'}`}
          />
        </button>
      </div>

      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          isCollapsed ? 'hidden' : 'block'
        } bg-gray-900 px-3 py-2 lg:bg-transparent`}
        id='navbarNav'
      >
        <ul className='flex flex-col lg:flex-row lg:space-x-4 lg:ml-auto'>
          <li>
            <Link
              className='block py-2 px-4 text-white hover:bg-gray-700 rounded'
              to='/'
              onClick={() => setIsCollapsed(true)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='block py-2 px-4 text-white hover:bg-gray-700 rounded'
              to='/about'
              onClick={() => setIsCollapsed(true)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='block py-2 px-4 text-white hover:bg-gray-700 rounded'
              to='/contact'
              onClick={() => setIsCollapsed(true)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
