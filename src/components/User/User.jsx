import PropTypes from 'prop-types';
import { Name, Resale } from './user.styled';
import { UpdateUserForm } from 'components/UpdateUserForm/UpdateUserForm';

export const User = ({
  user: { name, email, id, hasJob },
  userDelete,
  changeJobStatus,
  showUpdateFrom,
  userToUpdate,
  updateUser,
}) => {
  const isOrange = email.includes('biz');

  return (
    <div>
      <Name>
        Name: <Resale>{name}</Resale>
      </Name>
      <Name>
        Email: <Resale isOrange={isOrange}>{email}</Resale>
      </Name>
      <Name>
        HasJob: <span>{hasJob.toString()}</span>
      </Name>
      <button onClick={() => userDelete(id)}>Delete</button>
      <button onClick={() => changeJobStatus(id)}>Change Job Status </button>
      <button onClick={() => showUpdateFrom(id)}>UpdateUser</button>
      <>
        {userToUpdate && userToUpdate.id === id && (
          <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />
        )}
      </>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
