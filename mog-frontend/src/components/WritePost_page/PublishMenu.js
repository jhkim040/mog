import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from '../common/formStyle/FlexBox';
import { insert_post, update_post } from '../store/post';
import { Button } from './Button';

const PublishMenu = ({ newPost, setNewPost }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.category.categoryList);
  const onChangeHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const updatePostHandler = async () => {
    if (!newPost.id) {
      await axios
        .post(`/post/write`, newPost)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            const result = res.data;
            alert(`게시글 추가 완료`);
            dispatch(insert_post(result));
            navigate('/main');
          }
        })

        .catch((err) => {
          alert('죄송합니다. 잠시 후 다시 이용바랍니다.');
          console.log(err);
        });
    } else {
      await axios
        .put(`/post/update`, newPost)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            const result = res.data;
            alert(`게시글 수정 완료`);
            dispatch(update_post(result));
            navigate('/main');
          }
        })

        .catch((err) => {
          alert('죄송합니다. 잠시 후 다시 이용바랍니다.');
          console.log(err);
        });
    }
  };

  const select_category = (newPost) => {
    if (newPost.categoryId) {
      return newPost.categoryId;
    }
    if (categoryList && categoryList.length > 0) {
      const categoryId = categoryList[0].id;
      setNewPost({
        ...newPost,
        categoryId: categoryId,
      });
      return categoryId;
    }
  };
  return (
    <MenuBox>
      <MenuContainer>
        <MenuTitle>
          <h3>카테고리</h3>
          <select
            name="categoryId"
            onChange={onChangeHandler}
            defaultValue={select_category(newPost)}
          >
            {categoryList.length > 0 &&
              categoryList.map((category, idx) => (
                <option key={idx} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </MenuTitle>
        {/* <MenuTitle>
          <h3>공개설정</h3>
        </MenuTitle>
        <MenuTitle>
          <h3>발행설정</h3>
        </MenuTitle>
        <hr />
        <MenuTitle>
          <h3>태그편집</h3>
          <textarea name="editTag" cols="40" rows="5" />
        </MenuTitle> */}
        <hr />
        <div style={FlexBox} onClick={updatePostHandler}>
          <Button>SUBMIT</Button>
        </div>
      </MenuContainer>
    </MenuBox>
  );
};

export default PublishMenu;

const MenuBox = styled.div`
  /* width: 31.25rem;
  height: calc(43vh); */
  background-color: #fff;
  padding: 1rem;
  position: fixed;
  top: 5.3875rem;
  right: 1rem;
  border: 0.125rem solid rgb(102, 100, 255);
  border-radius: 0.9375rem;
  /* @media (max-width: 1100px) {
        display: none;
    } */
`;

const MenuContainer = styled.div`
  height: 100%;
  /* padding: 0 1.875rem; */
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.4375rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(102, 100, 255);
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-track {
    background-color: lightblue;
    border-radius: 0.625rem;
    box-shadow: inset 0rem 0rem 0.3125rem white;
  }
`;

const MenuTitle = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  & > h3 {
    font-size: 1.3rem;
    color: gray;
    margin: 1rem;
  }
  & > select {
    font-size: 1rem;
    color: gray;
    height: 1.5rem;
    font-family: Cafe24Ssurround;
  }
  & > input {
    width: 10rem;
    height: 5rem;
    align-items: flex-end;
  }
  & > #radio {
    width: 1rem;
    height: 1rem;
  }
`;
