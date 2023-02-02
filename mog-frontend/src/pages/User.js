import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import UserInfoBottom from '../components/User_page/UserInfoBottom';
import UserInfoTop from '../components/User_page/UserInfoTop';
import { login } from '../components/store/member';

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('/member/me', {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ` + localStorage.getItem('accessToken'),
        },
      })
      .then((res) => res.data)
      .then((res) => {
        dispatch(login(res));
      })
      .catch((err) => console.log(err));
  }, []);
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
