import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-6 w-64 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className='flex justify-between items-center mb-6'>
        <h5 className='text-lg font-semibold m-0'>Menu</h5>
        <button
          className='p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700'
          onClick={onClose}
        >
          <XMarkIcon className='h-6 w-6' />
        </button>
      </div>
      <ul className='flex flex-col space-y-2'>
        <li>
          <button
            className='w-full text-left py-2 px-4 text-white hover:bg-gray-700 rounded'
            onClick={() => {
              onClose();
              navigate('/tasktwo');
            }}
          >
            Tic Tac Game
          </button>
        </li>
        <li>
          <button
            className='w-full text-left py-2 px-4 text-white hover:bg-gray-700 rounded'
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
