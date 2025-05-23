import { useNavigate } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar bg-dark text-white p-3 ${isOpen ? 'open' : ''}`}>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h5 className='mb-0'>Menu</h5>
        <button
          className='btn-close btn-close-white'
          onClick={onClose}
        ></button>
      </div>
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <button
            className='nav-link btn btn-link text-white text-start'
            onClick={() => {
              onClose();
              navigate('/tasktwo');
            }}
          >
            Tic Tac Game
          </button>
        </li>
        <li className='nav-item'>
          <button
            className='nav-link btn btn-link text-white text-start'
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
