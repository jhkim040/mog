import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from '../components/common/formStyle/ButtonStyle';
import { FlexBox } from '../components/common/formStyle/FlexBox';
import { FormLogo } from '../components/common/formStyle/FormLogo';
import { FormWrap } from '../components/common/formStyle/FormWrap';
import ThemeMsg from '../components/common/formStyle/ThemeMsg';

const FindPassword = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    email: '',
  });

  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!memberInfo.email.trim()) {
      alert('입력하신 이메일을 확인해주세요!');
    } else {
      await axios
        .post('/member/sendPwEmail', memberInfo)
        .then((res) => {
          //   console.log('닉네임 변경');
          console.log(res.data);
          if (res.status === 200) {
            alert(`입력하신 이메일로 임시 비밀번호를 전송했습니다.`);
          }
        })
        .catch((err) => {
          alert('죄송합니다. 잠시 후 다시 이용바랍니다.');
          console.log(err);
        });
    }
  };

  return (
    <>
      <FormWrap>
        <FormLogo />
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={onChangeHandler}
              autoComplete="off"
            />
          </Form.Group>
          <div style={FlexBox}>
            <Button style={ButtonStyle} variant="primary" type="submit">
              Find PW
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

export default FindPassword;
