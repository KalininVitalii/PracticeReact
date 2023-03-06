// import { User } from './User/users';
import { users } from '../data/userJs';
import { UserList } from './UserList/UserList';
// import { Section } from 'Section/Section';
import { Component } from 'react';
import { Button } from './Button';

export class App extends Component {
  state = { users, isListShow: false };

  clickHandler = () => {
    this.setState({ isListShow: true });
  };
  userDelete = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  render() {
    const { isListShow, users } = this.state;
    return (
      <>
        {isListShow ? (
          <UserList users={users} userDelete={this.userDelete} />
        ) : (
          <Button
            type="Button"
            text="Show users list"
            clickHandler={this.clickHandler}
          />
        )}
      </>
    );
  }
}
