import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import { list_category } from '../components/store/category';
import { login } from '../components/store/member';
import UserInfoBottom from '../components/User_page/UserInfoBottom';
import UserInfoTop from '../components/User_page/UserInfoTop';

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      await axios
        .get('/member/me', {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ` + localStorage.getItem('accessToken'),
          },
        })
        .then((res) => res.data)
        .then((res) => {
          // console.log(res);
          dispatch(login(res));
        })
        .catch((err) => {
          alert('아이디 혹은 비밀번호를 확인해주세요!');
          console.log(err);
        });
    };
    getUserInfo();
  });
  return (
    <>
      <Header />
      <UserInfoContainer>
        <UserInfoTop />
        <UserInfoBottom />
      </UserInfoContainer>
    </>
  );
};

export default User;

const UserInfoContainer = styled.div`
  margin-top: 9.375rem;
  width: 49rem;
  margin-inline: auto;
`;
