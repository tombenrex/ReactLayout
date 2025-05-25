import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      aria-expanded={isOpen}
      role='navigation'
    >
      <div className='sidebar-header'>
        <h5 className='sidebar-title'>Menu</h5>
        <button
          className='sidebar-close'
          onClick={onClose}
          aria-label='Close sidebar'
        >
          <XMarkIcon className='icon' />
        </button>
      </div>
      <ul className='sidebar-list'>
        <li>
          <button
            className='sidebar-item'
            onClick={() => {
              onClose();
              navigate('/tasktwo');
            }}
          >
            Task 2
          </button>
        </li>
        <li>
          <button
            className='sidebar-item'
            onClick={() => {
              onClose();
              navigate('/taskthree');
            }}
          >
            Task 3
          </button>
        </li>
      </ul>
    </div>
  );
}
