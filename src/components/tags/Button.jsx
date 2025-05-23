const Button = ({ label }) => (
  <button
    className='btn btn-dark btn-lg'
    style={{ transition: 'all 0.2s ease-in-out' }}
    onClick={() => console.log(`${label} clicked!`)}
  >
    {label}
  </button>
);

export default Button;
