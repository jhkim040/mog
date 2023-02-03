import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { insert_category } from '../../store/category';
import ArticleBox from './ArticleBox';

const SideCategory = () => {
  const SIDECATEGORY_CONTAINER = useRef(null);
  const SIDECATEGORY_INPUT = useRef(null);

  const dispatch = useDispatch();
  const { id, email, nickname, message, accessToken, isLogin } = useSelector(
    (state) => state.member,
  );
  const [category, setCategory] = useState({
    name: '',
    member_id: id,
  });

  const onChangeHandler = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    // 카테고리 메뉴에서 새로운 카테고리 추가

    e.preventDefault();
    console.log(category);
    if (!category.name.trim()) {
      alert('카테고리 명을 확인해주세요');
    } else {
      await axios
        .post('/category/write', category)
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          alert('카테고리 추가완료!');
          dispatch(insert_category(res));
        })
        .catch((err) => {
          alert('카테고리 추가 실패');
          console.log(err);
        });
    }
  };

  // 카테고리 추가 버튼 클릭
  const onAddCategory = useCallback(() => {
    // 입력 form 공백으로 초기화
    SIDECATEGORY_INPUT.current.value = '';
    setTimeout(() => {
      // 추가된 category로 focus
      SIDECATEGORY_CONTAINER.current.scrollTop =
        SIDECATEGORY_CONTAINER.current.scrollHeight;
    }, 100);
    // console.log(categoryState);
  }, []);

  // 카테고리 추가 엔터키
  const onEnterAddState = useCallback((e) => {
    if (e.key === 'Enter') {
      // 입력 form 공백으로 초기화
      SIDECATEGORY_INPUT.current.value = '';
      setTimeout(() => {
        // 추가된 category로 focus
        SIDECATEGORY_CONTAINER.current.scrollTop =
          SIDECATEGORY_CONTAINER.current.scrollHeight;
      }, 100);
    }
    // console.log(categoryState);
  }, []);

  return (
    <Wrap>
      <SidebarTitle>Category</SidebarTitle>
      <Container ref={SIDECATEGORY_CONTAINER}>
        <ArticleBox />
      </Container>
      <hr />
      <EditCategory onSubmit={onSubmitHandler}>
        <input
          ref={SIDECATEGORY_INPUT}
          type="text"
          autoComplete="off"
          name="name"
          onChange={onChangeHandler}
          onKeyPress={onEnterAddState}
        />
        <button type="submit" onClick={onAddCategory}>
          ADD
        </button>
      </EditCategory>
    </Wrap>
  );
};

export default SideCategory;

const Wrap = styled.div`
  z-index: 2;
  width: 11.25rem;
  /* header height: 5rem */
  height: calc(100vh - 5rem);
  background-color: #fff;
  padding: 0.3125rem 0 3rem;
  position: fixed;
  top: 5rem;
  left: 0;
  border-top: 0.125rem solid rgb(102, 100, 255);
  border-right: 0.125rem solid rgb(102, 100, 255);
  border-bottom: 0.125rem solid rgb(102, 100, 255);
  border-top-right-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;
  /* @media (max-width: 1100px) {
        display: none;
    } */
`;

const SidebarTitle = styled.h2`
  color: rgb(102, 100, 255);
  padding-block: 0.5rem;
  font-size: 1.125rem;
  text-align: center;
  border-bottom: 0.1rem solid rgb(102, 100, 255);
`;

const Container = styled.div`
  height: 86%;
  padding: 0.5rem 1.875rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.4375rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(102, 100, 255);
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-track {
    background-color: lightgray;
    border-radius: 0.625rem;
    box-shadow: inset 0 0 0.3125rem white;
  }
`;

const EditCategory = styled.form`
  margin: 0.625rem 0;
  display: flex;
  justify-content: center;
  & > input {
    width: 60%;
  }
  & > button {
    width: 30%;
    outline: none;
    border: none;
    background-color: rgb(102, 100, 255);
    color: #fff;
    cursor: pointer;
  }
  & > button:hover {
    opacity: 0.6;
  }
`;
