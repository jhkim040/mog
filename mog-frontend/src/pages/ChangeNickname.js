import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from '../components/common/formStyle/ButtonStyle';
import { FlexBox } from '../components/common/formStyle/FlexBox';
import { FormLogo } from '../components/common/formStyle/FormLogo';
import { FormWrap } from '../components/common/formStyle/FormWrap';
import { change_nickname } from '../components/store/member';

const ChangeNickname = () => {
  const { id, email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    email: email,
    nickname: '',
  });

  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (memberInfo.nickname === '') {
      alert('닉네임을 확인해주세요');
    } else {
      await axios
        .put('/member/nickname', memberInfo)
        .then((res) => {
          console.log('닉네임 변경');
          console.log(res.data);

          alert(`닉네임 변경 완료!`);
          dispatch(change_nickname(memberInfo));
          navigate('/user');
        })
        .catch((err) => {
          alert('닉네임 변경 에러');
          console.log(err);
        });
    }
  };

  return (
    <FormWrap>
      <FormLogo />
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Nickname</Form.Label>
          <Form.Control
            name="nickname"
            type="text"
            placeholder="New Nickname"
            onChange={onChangeHandler}
            autoComplete="off"
          />
        </Form.Group>
        <div style={FlexBox}>
          <Button style={ButtonStyle} variant="primary" type="submit">
            Update
          </Button>
          <Button
            style={ButtonStyle}
            variant="success"
            type="button"
            onClick={() => {
              navigate('/user');
            }}
          >
            Main Page
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default ChangeNickname;
