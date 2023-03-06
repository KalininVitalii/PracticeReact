import PropTypes from 'prop-types';
import { Name, Resale } from './user.styled';

export const User = ({ user: { name, email, id }, userDelete }) => {
  const isOrange = email.includes('biz');

  return (
    <div>
      <Name>
        Name: <Resale>{name}</Resale>
      </Name>
      <Name>
        Email: <Resale isOrange={isOrange}>{email}</Resale>
      </Name>
      <button onClick={() => userDelete(id)}>Delete</button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
