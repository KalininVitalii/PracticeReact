import { User } from 'components/User/users';
import PropTypes from 'prop-types';

export const UserList = ({ users, userDelete }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} userDelete={userDelete} />
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
