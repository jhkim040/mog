import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import userPhotoImg from '../../images/user_profile(128px).png';
import {
  delete_all_search_result,
  list_search_result,
} from '../store/searchResult';
import BlogContent from './BlogContent';
import SearchContent from './SearchContent';

const MainContent = ({ keyword }) => {
  const memberId = useSelector((state) => state.member.id);
  const nickname = useSelector((state) => state.member.nickname);
  const message = useSelector((state) => state.member.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const searchPost = async () => {
      await axios
        .get(`/post/search/${memberId}/${keyword}`)
        .then((res) => res.data)
        .then((res) => {
          if (res.length > 0) {
            dispatch(list_search_result(res));
          } else {
            dispatch(delete_all_search_result());
          }
        })
        .catch((err) => console.log(err));
    };
    searchPost();
  }, [keyword]);

  return (
    <Wrap>
      <MainUserProfile>
        <UserPhoto />
        <div>
          {nickname && <UserName>{nickname}</UserName>}
          {message && <UserMsg>{message}</UserMsg>}
        </div>
      </MainUserProfile>
      {keyword ? <SearchContent /> : <BlogContent />}
    </Wrap>
  );
};

export default MainContent;

const Wrap = styled.div`
  width: 48rem;
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  /* margin-left: auto;
  margin-right: auto; */
  margin-inline: auto;
`;

const MainUserProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserPhoto = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  margin-right: 6.25rem;
  background: url(${userPhotoImg}) no-repeat center;
  background-size: contain;
  @media (max-width: 536px) {
    margin-right: 1.5625rem;
  }
`;

const UserName = styled.h2`
  color: #000;
  font-size: 1.875rem;
  font-weight: bold;
  @media (max-width: 536px) {
    font-size: 1.5rem;
  }
`;

const UserMsg = styled.p`
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  @media (max-width: 536px) {
    font-size: 1.125rem;
  }
`;
