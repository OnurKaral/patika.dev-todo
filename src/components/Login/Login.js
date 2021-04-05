import React from "react";
import { Button, Form } from "semantic-ui-react";
import "../Login/Login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Login;
