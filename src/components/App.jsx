// import { User } from './User/users';
import { users } from '../data/userJs';
import { UserList } from './UserList/UserList';
// import { Section } from 'Section/Section';
import { Component } from 'react';
import { Button } from './Button';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { users, isListShow: false, userToUpdate: {} };

  clickHandler = () => {
    this.setState({ isListShow: true });
  };
  userDelete = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };
  changeJobStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            hasJob: !user.hasJob, // true or false
          };
        }
        return user;
      }),
    }));
  };

  showUpdateFrom = userId => {
    // console.log(userId);
    const userToUpdate = this.state.users.find(user => user.id === userId);
    this.setState({ userToUpdate });
  };

  addUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
      hasJob: false,
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
    }));
  };

  updateUser = user => {
    const userIndex = this.state.users.findIndex(u => u.id === user.id);
    const arrUserToChange = [...this.state.users];
    arrUserToChange.splice(userIndex, 1, user);
    this.setState({ users: arrUserToChange, userToUpdate: {} });
  };

  render() {
    const { isListShow, users, userToUpdate } = this.state;
    return (
      <>
        {isListShow ? (
          <>
            <AddUserForm addUser={this.addUser} />
            <UserList
              users={users}
              userToUpdate={userToUpdate}
              userDelete={this.userDelete}
              changeJobStatus={this.changeJobStatus}
              showUpdateFrom={this.showUpdateFrom}
              updateUser={this.updateUser}
            />
          </>
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
