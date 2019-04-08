import React, { Component } from "react";
import axios from "axios";

export default class Employee extends Component {
  componentDidMount() {
    axios
      .get("https://secure-eyrie-63304.herokuapp.com/api/v1/employees.json")
      .then(response => {
        const res = response.data;
        console.log("Employee: ", res);
      })
      .catch(err => {
        console.log("Error getting employee: ", err.message);
      });
  }
  gotoNew = () => {
    this.props.history.push("/employee/new");
  };
  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <button className="btn btn-primary" onClick={this.gotoNew}>
            Add New Employee
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
