import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleBox = () => {
  const { categoryList } = useSelector((state) => state.category);

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
  & :hover {
    opacity: 0.6;
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
  & :hover {
    opacity: 0.6;
  }
`;
