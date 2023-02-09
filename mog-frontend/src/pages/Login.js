import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { ButtonStyle } from '../components/common/formStyle/ButtonStyle';
import { FormWrap } from '../components/common/formStyle/FormWrap';
import { FlexBox } from '../components/common/formStyle/FlexBox';
import { FormLogo } from '../components/common/formStyle/FormLogo';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = ({ accessToken, setAccessToken }) => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const onChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();

    await axios
      .post('/auth/login', loginInfo)
      .then((res) => {
        // console.log('로그인 시작');
        // console.log(res.data);

        alert(`로그인 완료!`);

        localStorage.setItem('accessToken', res.data.accessToken);
        setAccessToken(res.data.accessToken);
        navigate('/user');
      })
      .catch((err) => {
        alert('아이디 혹은 비밀번호를 확인해주세요!');
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
            variant="success"
            type="button"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Signup
          </Button>
          <Button
            style={ButtonStyle}
            variant="dark"
            type="button"
            onClick={() => {
              navigate('/findAccount');
            }}
          >
            Find PW
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default Login;
