import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderusers() {
    return this.props.users.map(user => (
      <li key={user.id} className="collection-item avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXMHZCFqG5EGaXyB5vKzaLZc0L9sduC2HsNmcAJo4L9nZd-_O"
          alt=""
          className="circle"
        />
        <span className="title">{user.name}</span>
        <p>User</p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">{user.id}</i>
        </a>
      </li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`} </title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <h3>Here is a big list of users</h3>
        <ul className="collection">{this.renderusers()}</ul>
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
