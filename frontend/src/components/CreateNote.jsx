import axios from "axios";
import React, { Component } from "react";
import Navigation from "./Navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    title: "",
    content: "",
    userSelected: '',
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/users/");
    this.setState({ users: res.data.map(user => user.userName)});
    // console.log(this.state.users);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      userSelected: this.state.userSelected,
      date: this.state.date,
      author: this.state.userSelected
    
    };
    const res = await axios.post("http://localhost:5000/api/notes/", newNote)
    console.log(res);
  }


  onInputChange = (e) => {
    this.setState({ 
       [e.target.name]: e.target.value 
    });
    console.log(e.target.value, e.target.name);
  };

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  

  render() {
    return (
      <>
        <Navigation />
        <div className="col-md-6 offset-md-3 ">
          <div className="card card-body">
            <h3 className="text-center">Create Note</h3>

            {/* Select User */}
            <div className="form-group">
              <label>Select User:</label>
              <select
                className="form-control"
                name="userSelected"
                onChange={this.onInputChange} 
              >
                {this.state.users.map((user) => (
                  
                  <option key={user._id} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input 
                type="text"  
                className="form-control" 
                placeholder="Title"
                name="title"
                onChange={this.onInputChange}
                required
              />

              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Content"
                  name="content"
                  onChange={this.onInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <button type="submit" className="btn btn-primary ">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
