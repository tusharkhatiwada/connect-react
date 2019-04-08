import React, { Component } from "react";
import axios from "axios";

export default class NewEmployee extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    role: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addNewEmployee = e => {
    e.preventDefault();
    const { fname, lname, email, phone, role } = this.state;
    axios
      .post("https://secure-eyrie-63304.herokuapp.com/api/v1/employees.json", {
        first_name: fname,
        last_name: lname,
        email,
        phone,
        role
      })
      .then(response => {
        const res = response.data;
        console.log("New Emp: ", res);
      })
      .then(err => {
        console.log("Error adding employee: ", err);
      });
  };
  render() {
    const { fname, lname, email, phone, role } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.addNewEmployee}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  onChange={this.handleInputChange}
                  value={fname}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  onChange={this.handleInputChange}
                  value={lname}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={this.handleInputChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={this.handleInputChange}
                  value={phone}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  onChange={this.handleInputChange}
                  value={role}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
