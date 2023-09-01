import PropTypes from 'prop-types';
import { formatDistanceToNow, parseISO } from 'date-fns';

function TimeAgo(props) {
  const { timestamp } = props;

  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

TimeAgo.propTypes = {
  timestamp: PropTypes.string,
};

TimeAgo.defaultProps = {
  timestamp: '',
};

export default TimeAgo;
