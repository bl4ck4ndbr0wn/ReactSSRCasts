import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderusers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }
  render() {
    return (
      <div>
        Here is a big list of users
        <br />
        <ul>{this.renderusers()}</ul>
      </div>
    );
  }
}

// UsersList.proptypes = {
//   fetchUsers: Prop
// }

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
