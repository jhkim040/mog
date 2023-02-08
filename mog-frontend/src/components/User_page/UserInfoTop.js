import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserImage from '../../images/user_profile(128px).png';
import { logout_category } from '../store/category';
import { logout } from '../store/member';
import { logout_post } from '../store/post';
import { delete_all_search_result } from '../store/searchResult';

const UserInfoTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    // localStorage.clear();
    alert('로그아웃 완료');
    dispatch(logout());
    dispatch(logout_category()); // 카테고리 정보 초기화
    dispatch(logout_post()); // 게시글 정보 초기화
    dispatch(delete_all_search_result()); // 검색 정보 초기화
    // navigate('/');
  };
  return (
    <Wrap>
      <UserImg>
        <form>
          <UserProfileImg />
          {/* <UserImgChange>이미지 변경</UserImgChange>
          <UserImgDelete>이미지 삭제</UserImgDelete> */}
          <Menu
            onClick={() => {
              navigate('/main');
            }}
          >
            나의 게시글
          </Menu>
          <Menu
            onClick={() => {
              onLogoutHandler();
              navigate('/');
            }}
          >
            로그아웃
          </Menu>
        </form>
      </UserImg>
    </Wrap>
  );
};

export default UserInfoTop;

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const UserImg = styled.div`
  position: relative;
  /* z-index: -1; */
  &::after {
    position: absolute;
    content: '';
    height: 13rem;
    top: 0.8rem;
    margin-left: 10rem;
    border-right: 0.125rem solid #cfcfcf;
  }
`;

const UserProfileImg = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  background: url(${UserImage}) no-repeat center;
`;

const Menu = styled.button`
  width: 90%;
  height: 1.8rem;
  margin: 0.625rem auto;
  display: block;
  font-weight: bold;
  color: rgb(102, 100, 255);
  border-radius: 0.3125rem;
  border: 2px solid rgb(102, 100, 255);
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgb(102, 100, 255);
    color: #fff;
    transition: 0.2s;
  }
`;
