import { Button, Form } from "react-bootstrap";
import React from "react";
import { ButtonStyle } from "../components/common/ButtonStyle";
import { FormWrap } from "../components/common/FormWrap";
import { FlexBox } from "../components/common/FlexBox";
import { FormLogo } from "../components/common/FormLogo";

const Login = () => {
  return (
    <FormWrap>
      <FormLogo />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div style={FlexBox}>
          <Button style={ButtonStyle} variant="primary" type="submit">
            Login
          </Button>
          <Button style={ButtonStyle} variant="secondary" type="button">
            Signup
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default Login;
