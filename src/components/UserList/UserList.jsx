import { User } from 'components/User/User';
import PropTypes from 'prop-types';

export const UserList = ({
  users,
  userDelete,
  changeJobStatus,
  showUpdateFrom,
  userToUpdate,
  updateUser,
}) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User
            user={user}
            userDelete={userDelete}
            changeJobStatus={changeJobStatus}
            showUpdateFrom={showUpdateFrom}
            userToUpdate={userToUpdate}
            updateUser={updateUser}
          />
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
