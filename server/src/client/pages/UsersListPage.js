import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderusers() {
    return this.props.users.map(user => (
      <li key={user.id} class="collection-item avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXMHZCFqG5EGaXyB5vKzaLZc0L9sduC2HsNmcAJo4L9nZd-_O"
          alt=""
          class="circle"
        />
        <span class="title">{user.name}</span>
        <p>User</p>
        <a href="#!" class="secondary-content">
          <i class="material-icons">{user.id}</i>
        </a>
      </li>
    ));
  }
  render() {
    return (
      <div>
        <h3>Here is a big list of users</h3>
        <ul class="collection">{this.renderusers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
