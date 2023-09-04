import PostUser from "./PostUser";
import Reactions from "./Reactions";
import TimeAgo from "./TimeAgo";

function PostsExcerpt(props) {
  const { post } = props;

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <PostUser userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reactions post={post} />
    </article>
  );
}

export default PostsExcerpt;
