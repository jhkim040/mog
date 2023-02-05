import axios from 'axios';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MinusIcon from '../../../images/minus.png';
import { delete_category } from '../../store/category';

const ArticleBox = () => {
  const categoryList = useSelector((state) => state.category.categoryList);
  const dispatch = useDispatch();

  // 카테고리 삭제
  const DeleteCategory = async (categoryId, category) => {
    // console.log(categoryId);
    categoryId = parseInt(categoryId);
    const reply = window.confirm('정말 삭제하시겠습니까?');

    if (!categoryId) {
      alert('죄송합니다. 잠시 후 다시 이용해주세요.');
    } else if (!reply) {
      alert('카테고리 삭제가 취소되었습니다.');
    } else {
      await axios
        .delete(`/category/delete/${categoryId}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert('카테고리 삭제 완료');
            dispatch(delete_category(category));
          }
        })
        .catch((err) => {
          console.log(err);
          alert('죄송합니다. 잠시 후 다시 이용해주세요.');
        });
    }
  };

  return (
    <>
      {categoryList.length > 0 ? (
        categoryList.map((category) => (
          <div key={category.id}>
            <CategoryTitle>
              <Link to={''}>
                {category.id}
                {category.name}
              </Link>
              <DeleteIcon
                onClick={() => {
                  console.log(category);
                  DeleteCategory(category.id, category);
                }}
              />
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
          <CategoryTitle>No Post</CategoryTitle>
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
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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

const DeleteIcon = styled.i`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(${MinusIcon}) no-repeat center center;
  background-size: cover;
`;
