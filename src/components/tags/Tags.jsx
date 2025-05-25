import Button from './Button';

export default function Tags() {
  const tags = Array.from({ length: 9 }, (_, i) => `Tag ${i + 1}`);

  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag, index) => (
        <Button key={index} label={tag} />
      ))}
    </div>
  );
}
