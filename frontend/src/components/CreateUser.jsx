import React, { Component } from "react";
import axios from "axios";
import Navigation from "./Navigation";

export default class CreateUser extends Component {
  state = {
    users: [],
    userName: "",
  };

  /* Getting the users from the database. */
  getUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users/");
    this.setState({
      users: res.data,
    });
    // console.log(this.state.users);
  };

  /**
   * When the component mounts, get the users from the database and set the state to the users.
   */
  async componentDidMount() {
    this.getUsers();
    // console.log(this.state.users);
  }

  /* Setting the state of the userName to the value of the input field. */
  onChangeUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
    // console.log(e.target.value);
  };

  /* Preventing the default action of the form, which is to refresh the page. It is also sending the
  userName to the database. */
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users/", {
      userName: this.state.userName,
    });

    /* Clearing the input field after the user submits the form. */
    this.setState({ userName: "" });
    /* Calling the getUsers function. */
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    this.getUsers();
    console.log(id)
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-body">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.onChangeUserName}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    value={this.state.userName}
                    onClick={this.onSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                {this.state.users.map((user) => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={user._id}
                    onDoubleClick={() => this.deleteUser(user._id)}
                  >
                    {user.userName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
