import PostList from '../posts/PostList';
import TagToggle from '../tags/TagToggle';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className=''>
      <div className='bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl rounded-xl p-6'>
        <h1 className='text-4xl font-bold mb-3 text-white drop-shadow-md'>
          🏠 Home Page
        </h1>
        <p className='text-lg text-white/90 drop-shadow-md animate-fade-in delay-200 max-w-2xl mx-auto'>
          Welcome to my first React app! It's built with Vite and JavaScript.
          I've also installed Tailwind and React Router for styling and
          navigation.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 place-content-center'>
        <div className='md:col-span-2 md:col-start-2'>
          <div className='bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl rounded-xl p-6 '>
            <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center'>
              Recent Posts
              <DocumentTextIcon className='h-6 w-6 ml-2 text-gray-500 dark:text-gray-300' />
            </h2>
            <div className='text-gray-700 dark:text-gray-300'>
              <PostList />
            </div>
          </div>
        </div>

        <div className='md:col-span-1'>
          <div className='bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl rounded-xl p-6 animate-fade-in delay-300'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
              Filter Tags
            </h2>
            <TagToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
