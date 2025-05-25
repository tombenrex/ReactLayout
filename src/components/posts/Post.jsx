function Post({ title, body }) {
  return (
    <>
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{body}</p>
    </>
  );
}

export default Post;
