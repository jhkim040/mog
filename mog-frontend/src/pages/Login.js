import { Button, Form } from "react-bootstrap";
import React from "react";
import { ButtonStyle } from "../components/common/ButtonStyle";
import { FormWrap } from "../components/common/FormWrap";
import { FlexBox } from "../components/common/FlexBox";
import { FormLogo } from "../components/common/FormLogo";
import { HttpHeadersContext } from "../components/context/HttpHeadersProviders";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { headers, setHeaders } = useContext(HttpHeadersContext);

  const [memberInfo, setMemberInfo] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();

    await axios
      .post("/auth/login", memberInfo)
      .then((res) => {
        // console.log('로그인 시작');
        // console.log(res.data);

        alert(`로그인 완료!`);

        localStorage.setItem("accessToken", res.data.accessToken);
        setHeaders({
          ...headers,
          Authorization: `Bearer ${res.data.accessToken}`,
        });

        navigate("/user");
      })
      .catch((err) => {
        alert("로그인 에러");
        console.log(err);
      });
  };

  return (
    <FormWrap>
      <FormLogo />

      <Form onSubmit={onLoginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <div style={FlexBox}>
          <Button style={ButtonStyle} variant="primary" type="submit">
            Login
          </Button>
          <Button
            style={ButtonStyle}
            variant="secondary"
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default Login;
