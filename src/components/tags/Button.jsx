const Button = ({ label }) => (
  <button
    className='px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50'
    style={{ transition: 'all 0.2s ease-in-out' }}
    onClick={() => console.log(`${label} clicked!`)}
  >
    {label}
  </button>
);

export default Button;
