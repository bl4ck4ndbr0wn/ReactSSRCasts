import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li key={admin.id} className="collection-item avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXMHZCFqG5EGaXyB5vKzaLZc0L9sduC2HsNmcAJo4L9nZd-_O"
          alt=""
          className="circle"
        />
        <span className="title">{admin.name}</span>
        <p>Admin</p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">{admin.id}</i>
        </a>
      </li>
    ));
  }
  render() {
    return (
      <div>
        <h3>Here is a Private list of Admin users</h3>
        <ul className="collection">{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return {
    admins
  };
};

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
