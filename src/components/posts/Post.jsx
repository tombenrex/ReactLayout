function Post({ title, body }) {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{body}</p>
      </div>
    </div>
  );
}

export default Post;
