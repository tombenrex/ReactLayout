import Button from './Button';

const TagToggle = () => {
  const tags = Array.from({ length: 9 }, () => 'Click Tag BTN');

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {tags.map((tag, index) => (
        <Button key={index} label={tag} variant='tag' />
      ))}
    </div>
  );
};

export default TagToggle;
