import { Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import './navbar.css';

export default function Navbar({ onSidebarOpen, isSidebarOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSidebarToggle = () => {
    onSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='d-flex align-items-center gap-2'>
        <button className='btn btn-dark btn-lg' onClick={handleSidebarToggle}>
          <i className='bi bi-list'></i>
        </button>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>

      <Link className='navbar-brand text-center mx-auto' to='/'>
        F25 Borås YH - React Kurs
      </Link>

      <div className='d-flex align-items-center gap-2'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
        <button
          className='btn btn-dark btn-lg d-lg-none'
          type='button'
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls='navbarNav'
          aria-expanded={!isCollapsed}
          aria-label='Toggle navigation'
        >
          <i
            className={`bi ${
              isCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'
            }`}
          ></i>
        </button>
      </div>

      <div
        className={`navbar-collapse ${
          isCollapsed ? 'collapse' : 'show'
        } bg-dark px-3`}
        id='navbarNav'
      >
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/'
              onClick={() => setIsCollapsed(true)}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/about'
              onClick={() => setIsCollapsed(true)}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
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
