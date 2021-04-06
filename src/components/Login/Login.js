import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Form } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import "./Login.css";
import Dashboard from "../../screens/Dashboard";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

export default class Login extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      surname: "",
    };
  }

  // Form Events
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeSurname(e) {
    this.setState({ surname: e.target.value });
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        name: this.userData.name,
        surname: this.userData.surname,
      });
    } else {
      this.setState({
        name: "",
        surname: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
          </Form.Field>

          <Form.Field>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                className="form-control"
                value={this.state.surname}
                onChange={this.onChangeSurname}
              />
            </div>
          </Form.Field>

          <Button
            type="submit"
            className="btn btn-primary btn-block"
            component={Link}
            to="/dashboard"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
