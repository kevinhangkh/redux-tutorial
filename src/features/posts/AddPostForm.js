import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const resetAll = () => {
    setTitle('');
    setContent('');
  };

  const savePost = () => {
    if (!title || !content) {
      return;
    }

    dispatch(postAdded(title, content));
    resetAll();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={savePost}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
