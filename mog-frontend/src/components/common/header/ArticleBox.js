import axios from 'axios';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MinusIcon from '../../../images/minus.png';
import { delete_category } from '../../store/category';
import { delete_all_post } from '../../store/post';

const ArticleBox = () => {
  const categoryList = useSelector((state) => state.category.categoryList);
  // console.log(categoryList);

  const postList = useSelector((state) => state.post.postList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 카테고리 별 게시글 리스트
  const filter_postList = (categoryId) => {
    // console.log(postList);
    return postList.filter((post) => post.categoryId === categoryId);
  };

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
          // console.log(res);
          if (res.status === 200) {
            alert('카테고리 삭제 완료');
            dispatch(delete_category(category)); // // 게시글 정보 초기화
            dispatch(delete_all_post()); // 게시글 정보 초기화
            navigate('/main');
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
              <Link to={`/post/search/${category.name}`}>{category.name}</Link>
              <DeleteIcon
                onClick={() => {
                  DeleteCategory(category.id, category);
                }}
              />
            </CategoryTitle>
            <ul>
              {filter_postList(category.id).length > 0 &&
                filter_postList(category.id).map((post) => (
                  <SingleArticle key={post.id}>
                    <Link to={`/post/view/${category.id}/${post.id}`}>
                      {post.title}
                    </Link>
                  </SingleArticle>
                ))}
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
  width: 4.3rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeleteIcon = styled.i`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(${MinusIcon}) no-repeat center center;
  background-size: cover;
`;
