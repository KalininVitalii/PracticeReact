import { User } from './User/users';
import { users } from '../data/userJs';
import { UserList } from './UserList/UserList';
import { Section } from 'Section/Section';

export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="usersList">
        <UserList users={users} />
      </Section>
    </>
  );
};
