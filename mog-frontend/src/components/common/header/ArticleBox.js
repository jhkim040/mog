import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list_category } from '../../store/category';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ArticleBox = () => {
  const dispatch = useDispatch();

  const { id, email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    const getCategoryList = async () => {
      axios
        .post('/category/list', {
          member_id: id,
        })
        .then((res) => res.data)
        .then((res) => {
          if (res.length > 0) {
            dispatch(list_category(res));
          }
        })
        .catch((err) => console.log(err));
    };
    getCategoryList();
  }, []);

  return (
    <>
      {categoryList.length > 0 ? (
        categoryList.map((category) => (
          <div key={category.id}>
            <CategoryTitle>
              <Link to={''}>{category.name}</Link>
            </CategoryTitle>
            <ul>
              <SingleArticle>
                <Link to={''}></Link>
              </SingleArticle>
            </ul>
          </div>
        ))
      ) : (
        <div>
          <CategoryTitle>게시글이 없습니다.</CategoryTitle>
        </div>
      )}
    </>
  );
};

export default ArticleBox;

const CategoryTitle = styled.h2`
  color: #000;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  & > a {
    text-decoration: none;
    color: #000;
  }
`;

const SingleArticle = styled.li`
  color: #000;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  list-style: none;
  & > a {
    text-decoration: none;
    color: #000;
  }
`;
