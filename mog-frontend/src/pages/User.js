import React, { useEffect } from 'react';
import styled from 'styled-components';
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
    </>
  );
};

export default User;

const UserInfoContainer = styled.div`
  margin-top: 9.375rem;
  width: 49rem;
  margin-inline: auto;
`;
