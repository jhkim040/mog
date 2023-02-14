import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { ButtonStyle } from '../components/common/formStyle/ButtonStyle';
import { FormWrap } from '../components/common/formStyle/FormWrap';
import { FlexBox } from '../components/common/formStyle/FlexBox';
import { FormLogo } from '../components/common/formStyle/FormLogo';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ThemeMsg from '../components/common/formStyle/ThemeMsg';

const Signup = () => {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    nickname: '',
    message: '',
  });
  const onChangeHandler = (e) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };
  const onSignupHandler = async (e) => {
    e.preventDefault();
    if (
      signupInfo.email.trim() === '' ||
      signupInfo.password.trim() === '' ||
      signupInfo.nickname.trim() === ''
    ) {
      alert(`필요한 정보를 모두 입력해주세요!`);
    } else {
      await axios
        .post('/auth/signup', signupInfo)
        .then((res) => {
          console.log('회원가입 시작');
          console.log(res.data);

          alert(`${res.data.nickname}님, 회원가입 완료!`);
          alert(`회원가입한 정보로 로그인해주세요!`);

          navigate('/');
        })
        .catch((err) => {
          alert('회원가입 에러');
          console.log(err);
        });
    }
  };

  return (
    <>
      <FormWrap>
        <FormLogo />

        <Form onSubmit={onSignupHandler}>
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

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              name="nickname"
              type="text"
              placeholder="Nickname"
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message (optional)</Form.Label>
            <Form.Control
              name="message"
              type="text"
              placeholder="What do you feel right now?"
              onChange={onChangeHandler}
            />
          </Form.Group>

          <div style={FlexBox}>
            <Button style={ButtonStyle} variant="primary" type="submit">
              Signup
            </Button>
            <Button
              style={ButtonStyle}
              variant="success"
              type="button"
              onClick={() => {
                navigate('/');
              }}
            >
              Login
            </Button>
          </div>
        </Form>
      </FormWrap>
      <ThemeMsg />
    </>
  );
};

export default Signup;
