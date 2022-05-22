import React, { Component } from "react";
import "./css/syle.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailId: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirm: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      EmailId: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };
  phonehandler = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  confirmhandler = (event) => {
    this.setState({
      confirm: event.target.value,
    });
  };

  // genderhandler = (event) => {
  //   this.setState({
  //     gender: event.target.value,
  //   });
  // };

  handleSubmit = (event) => {
    // alert(
    //   `${this.state.EmailId} ${this.state.fullName}  Registered Successfully !!!!`
    // );
    console.log(this.state);
    this.setState({
      EmailId: "",
      fullName: "",
      phoneNumber: "",
      password: "",
      confirm: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="http://programminghead.com">
          <h1>Create an account</h1>
          <label>Your Email Address</label>{" "}
          <div>
            <input
              type="email"
              value={this.state.EmailId}
              onChange={this.firsthandler}
            />
          </div>
          <br />
          <label>Your Password</label>{" "}
          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordhandler}
            />
          </div>
          <br />
          <label>Confirm password</label>{" "}
          <div>
            <input
              type="password"
              value={this.state.confirm}
              onChange={this.confirmhandler}
            />
          </div>
          <br />
          <label>Your Full Name </label>{" "}
          <div>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.lasthandler}
            />
          </div>
          <br />
          <label>Your Phone Number </label>
          <div>
            <input
              type="tel"
              value={this.state.phoneNumber}
              onChange={this.phonehandler}
            />
          </div>
          <br />
          {/* <label>Gender :</label>
          <select onChange={this.genderhandler} defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br /> */}
          {/* <input type="submit" value="create account" /> */}
          <a href="./components/barChart.js  ">
            <button class="GFG">Click Here</button>
          </a>
        </form>
      </div>
    );
  }
}

export default Form;
