import React, { useRef, useState } from 'react';
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

  const imgRef = useRef(null);

  const [profileImg, setProfileImg] = useState('');
  // 프로필 이미지 업로드
  const load_profileImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = reader.result;
      setProfileImg(img);
    };
  };

  // 프로필 이미지 삭제
  const delete_profileImg = () => {
    setProfileImg('');
  };

  // 프로필 이미지 UI
  const UserProfileImg = styled.div`
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
    background: url(${profileImg ? profileImg : UserImage}) no-repeat center;
    background-size: cover;
  `;

  return (
    <Wrap>
      <UserProfileImg />
      <UserImg>
        <form>
          <Menu htmlFor="profileImg">이미지 변경</Menu>
          <ProfileImgInput
            type="file"
            name="profileImg"
            id="profileImg"
            onChange={load_profileImg}
            ref={imgRef}
          />
          <Menu
            type="button"
            onClick={() => {
              setProfileImg('');
            }}
          >
            이미지 삭제
          </Menu>
          <Menu onClick={delete_profileImg}>나의 게시글</Menu>
          <Menu
            type="button"
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
  padding-right: 2rem;
  border-right: 0.125rem solid #cfcfcf;
`;

const UserImg = styled.div`
  position: relative;

  /* &::after {
    position: absolute;
    content: '';
    height: 13rem;
    top: 0.8rem;
    margin-left: 10rem;
    border-right: 0.125rem solid #cfcfcf;
  } */
  /* z-index: -1; */
`;

const Menu = styled.label`
  width: 90%;
  height: 1.8rem;
  text-align: center;
  padding-top: 0.15rem;
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

const ProfileImgInput = styled.input`
  display: none;
`;
