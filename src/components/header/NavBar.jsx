import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './NavBar.css';

export default function Navbar({ onSidebarOpen, isSidebarOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className='navbar px-4 py-2 fixed top-0 left-0 w-full z-50 bg-navbar-bg backdrop-blur'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <button
            className='navbar-toggle'
            onClick={() => onSidebarOpen(!isSidebarOpen)}
            aria-label='Toggle sidebar'
          >
            <Bars3Icon className='icon' />
          </button>
        </div>

        <Link to='/' className='navbar-title flex-1 text-center'>
          <h1>F25 Borås YH - React Kurs</h1>
        </Link>

        <div className='flex items-center gap-2'>
          <button
            className='navbar-toggle'
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-expanded={!isCollapsed}
            aria-label='Toggle navigation'
          >
            <ChevronDownIcon className='icon' />
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className='navbar-menu'>
          <ul className='navbar-list'>
            {['/', '/about', '/contact'].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className='navbar-link'
                  onClick={() => setIsCollapsed(true)}
                >
                  {path === '/'
                    ? 'Home'
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
