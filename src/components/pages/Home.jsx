import PostList from '../posts/PostList';
import TagToggle from '../tags/TagToggle';

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto mt-6 px-4'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold mb-2 dark:text-white animate-fade-in'>
          🏠 Home Page
        </h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 animate-fade-in delay-200'>
          Welcome to my first React app! It's built with Vite and JavaScript.
          I've also installed Tailwind and React Router for styling and
          navigation.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='md:col-span-2'>
          <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 animate-fade-in'>
            <h2 className='text-2xl font-semibold mb-4 dark:text-white'>
              Recent Posts <i className='bi bi-sticky'></i>
            </h2>
            <PostList />
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 animate-fade-in delay-300'>
          <h2 className='text-xl font-semibold mb-4 dark:text-white'>
            Filter Tags
          </h2>
          <TagToggle />
        </div>
      </div>
    </div>
  );
}
