import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThemeMsg from '../components/common/formStyle/ThemeMsg';
import Header from '../components/common/header/Header';
import UserInfoBottom from '../components/User_page/UserInfoBottom';
import UserInfoTop from '../components/User_page/UserInfoTop';

const User = () => {
  return (
    <>
      <Header />
      <UserInfoContainer>
        <UserInfoTop />
        <UserInfoBottom />
      </UserInfoContainer>
      <ThemeMsg />
    </>
  );
};

export default User;

const UserInfoContainer = styled.div`
  margin-top: 9.375rem;
  width: 43rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
`;
