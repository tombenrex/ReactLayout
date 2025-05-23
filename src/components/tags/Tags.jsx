import Button from './Button';

export default function Tags() {
  const tags = Array.from({ length: 9 }, () => ` Click Tag BTN `);

  return (
    <div className='d-flex flex-wrap gap-2'>
      {tags.map((tag, index) => (
        <Button key={index} label={tag} />
      ))}
    </div>
  );
}
