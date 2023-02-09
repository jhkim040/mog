import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from '../components/common/formStyle/ButtonStyle';
import { FlexBox } from '../components/common/formStyle/FlexBox';
import { FormLogo } from '../components/common/formStyle/FormLogo';
import { FormWrap } from '../components/common/formStyle/FormWrap';
import { delete_account_category } from '../components/store/category';
import { delete_account } from '../components/store/member';
import { delete_all_post } from '../components/store/post';
import { delete_all_search_result } from '../components/store/searchResult';

const DeleteAccount = () => {
  const { id, email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    email: email,
    password: '',
  });

  const onChangeHandler = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  const DeleteAccountHandler = useCallback(
    async (e) => {
      e.preventDefault();
      // console.log(memberInfo);
      if (!memberInfo.password.trim()) {
        alert('비밀번호를 확인해주세요!');
      } else {
        await axios
          .post('/member/account', memberInfo)
          .then((res) => {
            console.log(res);
            return res.data;
          })
          .then((res) => {
            console.log(res);
            if (res === 'ok') {
              // localStorage.clear();
              alert('회원탈퇴 완료');
              dispatch(delete_account());
              dispatch(delete_account_category()); // 카테고리 정보 초기화
              dispatch(delete_all_post()); // 게시글 정보 초기화
              dispatch(delete_all_search_result()); // 검색 정보 초기화
            }
          })
          .then((res) => {
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
            alert('비밀번호를 확인해주세요');
          });
      }
    },
    [memberInfo],
  );

  return (
    <FormWrap>
      <FormLogo />
      <Form onSubmit={DeleteAccountHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Delete Your Account</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <div style={FlexBox}>
          <Button style={ButtonStyle} variant="primary" type="submit">
            Delete
          </Button>
          <Button
            style={ButtonStyle}
            variant="success"
            type="button"
            onClick={() => {
              navigate('/user');
            }}
          >
            My Page
          </Button>
        </div>
      </Form>
    </FormWrap>
  );
};

export default DeleteAccount;
