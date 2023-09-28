import React from "react";
import { Input } from "antd";
import "./App.css";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Registeration Successful",
    });
  };

  return (
    <div>
      {contextHolder}
      <h1>Register</h1>
      <form className="register-div">
        <Input placeholder="Username" className="form-input" />
        <br />
        <br />
        <Input.Password className="form-input" placeholder="Password" />
        <br />
        <br />
        <Input.Password className="form-input" placeholder="Re-type Password" />
        <Button onClick={success} htmlType="submit" className="register-submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
