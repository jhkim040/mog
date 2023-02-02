import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserInfoBottom = () => {
  const navigate = useNavigate();
  const { email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );
  return (
    <Wrap>
      <SingleInfo>
        <SingleUserInfo>이메일</SingleUserInfo>
        <Info>{email ? email : '로그인 해주세요'}</Info>
        <UserEdit
          onClick={() => {
            navigate('/password');
          }}
        >
          암호변경
        </UserEdit>
      </SingleInfo>
      <SingleInfo>
        <SingleUserInfo>닉네임</SingleUserInfo>
        <Info>{nickname}</Info>
        <UserEdit
          onClick={() => {
            navigate('/nickname');
          }}
        >
          수정하기
        </UserEdit>
      </SingleInfo>
      <SingleInfo>
        <SingleUserInfo>상태메시지</SingleUserInfo>
        <Info>{message}</Info>
        <UserEdit
          onClick={() => {
            navigate('/message');
          }}
        >
          수정하기
        </UserEdit>
      </SingleInfo>

      <br />
      <br />
      <UserEdit
        onClick={() => {
          navigate('/account');
        }}
      >
        회원탈퇴
      </UserEdit>
    </Wrap>
  );
};

export default UserInfoBottom;

const Wrap = styled.div`
  width: 95.6%;
  margin-top: 2rem;
  padding-left: 2rem;
  position: relative;
  /* z-index: -1; */
  & > div {
    margin-block: 1rem;
  }
`;

const SingleInfo = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const SingleUserInfo = styled.div`
  font-size: 1.25rem;
`;

const Info = styled.div`
  margin-left: 2rem;
  font-size: 1.25rem;
  color: rgb(102, 100, 255);
`;

const UserEdit = styled.span`
  position: absolute;
  right: 0;
  color: red;

  cursor: pointer;
  &:hover {
    background-color: rgb(102, 100, 255);
    color: #fff;
    transition: 0.2s;
  }
`;
