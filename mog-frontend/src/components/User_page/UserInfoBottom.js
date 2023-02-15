import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserInfoBottom = () => {
  const navigate = useNavigate();
  const { id, email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );

  return (
    <Wrap>
      <SingleInfo>
        <SingleUserInfo>이메일</SingleUserInfo>
        {/* <Info>{email ? email : '로그인 해주세요'}</Info> */}
        {email ? (
          <Info>{email}</Info>
        ) : (
          <Info
            onClick={() => {
              navigate('/');
            }}
          >
            로그인 해주세요
          </Info>
        )}
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
  @media (max-width: 706px) {
    margin-bottom: 4rem;
  }
`;

const SingleInfo = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  @media (max-width: 706px) {
    height: 7rem;
    display: block;
    margin-bottom: 4rem;
    border-bottom: 0.125rem solid #cfcfcf;
  }
`;

const SingleUserInfo = styled.h2`
  font-size: 1.25rem;
`;

const Info = styled.h2`
  margin-left: 4rem;
  font-size: 1.25rem;

  color: rgb(102, 100, 255);

  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 706px) {
    margin-left: 0;
  }
`;

const UserEdit = styled.span`
  position: absolute;
  right: 0;
  color: red;
  font-size: 1.25rem;

  cursor: pointer;
  &:hover {
    background-color: rgb(102, 100, 255);
    color: #fff;
    transition: 0.2s;
  }
  @media (max-width: 706px) {
    margin-top: 0.7rem;
  }
`;
