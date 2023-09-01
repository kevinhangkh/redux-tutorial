import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostUser from './PostUser';
import TimeAgo from './TimeAgo';
import Reactions from './Reactions';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const latestOrderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = latestOrderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <PostUser userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reactions post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
