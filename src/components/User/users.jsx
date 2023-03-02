import PropTypes from 'prop-types';
import { Name, Resalt } from './user.styled';

export const User = ({ user: { name, email } }) => {
  const isOrange = email.includes('biz');

  return (
    <div>
      <Name>
        Name: <Resalt>{name}</Resalt>
      </Name>
      <Name>
        Email: <Resalt isOrange={isOrange}>{email}</Resalt>
      </Name>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
