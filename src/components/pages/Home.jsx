import PostList from '../posts/PostList';
import TagToggle from '../tags/TagList';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import './Pages.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-header home-card'>
        <h1 className='home-title'>🏠 Home Page</h1>
        <p className='home-subtitle'>
          Welcome to my first React app! It's built with Vite and JavaScript.
          I've also installed Tailwind and React Router for styling and
          navigation.
        </p>
      </div>

      <div className='home-grid grid gap-6 md:grid-cols-2'>
        <div className='home-card order-2 md:order-1'>
          <h2 className='card-title'>
            <span>Recent Posts</span>
            <DocumentTextIcon className='card-icon' />
          </h2>
          <div className='card-content'>
            <PostList />
          </div>
        </div>

        <div className='order-1 md:order-2'>
          <div className='tag-card'>
            <h2 className='card-title'>Filter Tags</h2>
            <TagToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
