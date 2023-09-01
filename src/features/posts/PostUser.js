import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

function PostUser(props) {
  const { userId } = props;

  const users = useSelector(selectAllUsers);
  const user = users.find((user) => user.id === userId);

  return <span>by {user ? user.name : 'Unknown user'}</span>;
}

PostUser.propTypes = {
  userId: PropTypes.string,
};

PostUser.defaultProps = {
  userId: '',
};

export default PostUser;
