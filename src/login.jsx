import React from "react";
import "./App.css";
import { Input } from "antd";
import { Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1 className="login">Solitude</h1>
      <form className="logindiv">
        <Input placeholder="Username" className="form-input" />
        <br />
        <br />
        <Input.Password className="form-input" placeholder="Password" />
        <Button htmlType="submit" className="submit">
          Submit
        </Button>
        <Checkbox>Remember me</Checkbox>
        <Link to="/register">
          <p>Register instead?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
