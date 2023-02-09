import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../images/search_icon.png';
import userPhotoImg from '../../../images/user_profile(48px).png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  delete_all_search_result,
  list_search_result,
} from '../../store/searchResult';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberId = useSelector((state) => state.member.id);
  const categoryList = useSelector((state) => state.category.categoryList);

  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <NavBox>
      <SearchBox>
        <input
          type="text"
          name="keyword"
          autoComplete="off"
          onChange={onChangeHandler}
        />
        <SearchBtn
          type="button"
          onClick={() => {
            if (!keyword.trim()) {
              navigate(`/main`);
            } else {
              navigate(`/post/search/${keyword}`);
            }
          }}
        />
      </SearchBox>

      <NewArticle
        style={{ display: categoryList.length > 0 ? 'block' : 'none' }}
      >
        <NewArticleBtn
          onClick={() => {
            navigate('/post/publish');
          }}
        >
          새 글 쓰기
        </NewArticleBtn>
      </NewArticle>

      <UserProfile
        onClick={() => {
          navigate('/user');
        }}
      >
        <UserPhoto />
      </UserProfile>
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  /* width: 11.25rem; */
  height: 100%;
  margin-right: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > input {
    width: 77%;
    height: 45%;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  }
  /* @media (max-width: 390px) {
    justify-content: center;
    margin-right: 0;
    & > input {
      width: 60%;
    }
  }
  @media (max-width: 340px) {
    width: 8rem;
    & > input {
      width: 40%;
    }
  } */
  @media (max-width: 612px) {
    display: none;
  }
`;

const SearchBtn = styled.button`
  display: inline-block;
  width: 2rem;
  height: 1.8rem;
  background: url(${searchIcon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.6;
  }
`;

const NewArticle = styled.div`
  height: 100%;
  margin-right: 1.375rem;
`;

const NewArticleBtn = styled.button`
  width: 6.25rem;
  height: 90%;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  border: 2px solid rgb(102, 100, 255);
  border-radius: 0.3125rem;
  outline: none;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
    border: none;
  }
`;

const UserProfile = styled.div`
  width: 2.5rem;
  height: 100%;
  margin-right: 2.5rem;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 612px) {
    /* display: none; */
    margin: 0;
  }
`;

const UserPhoto = styled.i`
  display: block;
  height: 2.5rem;
  background: url(${userPhotoImg}) no-repeat center center;
  background-size: contain;
`;
