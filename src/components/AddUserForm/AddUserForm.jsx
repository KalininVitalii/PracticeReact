import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './AddUserFrom.styled';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  handelNameInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({ name: '', email: '' });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <label>
            Name
            <Input
              name="name"
              type="text"
              value={name}
              onChange={this.handelNameInput}
            />
          </label>
          <label>
            Email
            <Input
              name="email"
              type="text"
              value={email}
              onChange={this.handelNameInput}
            />
          </label>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
