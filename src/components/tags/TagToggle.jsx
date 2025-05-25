import { useState } from 'react';
import Tags from './Tags';

export default function TagToggle() {
  const [showTags, setShowTags] = useState(false);

  return (
    <>
      <button
        className={`bi bi-tags ${
          showTags ? 'bg-dark text-white' : 'bg-dark text-white'
        }`}
        onClick={() => setShowTags(!showTags)}
        style={{
          cursor: 'pointer',
          fontSize: '2rem',
          border: 'none',
          background: 'none',
        }}
        aria-label={showTags ? 'Hide Tags' : 'Show Tags'}
      />
      <div className={`tag-container ${showTags ? 'show' : ''}`}>
        <div className='inner-container'>
          <Tags />
        </div>
      </div>
    </>
  );
}
