const Button = ({ label, variant = 'primary' }) => {
  const base =
    'px-6 py-4 font-semibold rounded-lg shadow-md transition duration-300';
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    tag: 'bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full',
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
      onClick={() => console.log(`${label} clicked!`)}
    >
      {label}
    </button>
  );
};

export default Button;
