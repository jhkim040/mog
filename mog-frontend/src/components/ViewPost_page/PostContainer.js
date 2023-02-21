import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dotsImg from '../../images/dots.png';
import ShareIcon from '../../images/share.png';
import { delete_post } from '../store/post';

const PostContainer = ({ category, post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.member.nickname);

  // 우측 상단 submit 창 open/hide
  const [isOpen, setIsOpen] = useState(false);

  const openSettingHandler = useCallback(() => {
    // console.log(isOpen);
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onDeleteHandler = async () => {
    const postId = post.id;
    if (!postId) {
      alert('죄송합니다! 잠시 후 다시 이용해주세요.');
    } else {
      await axios
        .delete(`/post/delete/${postId}`)
        .then((res) => {
          if (res.status === 200) {
            alert('게시글 삭제 완료!');
            dispatch(delete_post(post));
            navigate('/main');
          }
        })
        .catch((err) => {
          alert('죄송합니다! 잠시 후 다시 이용해주세요.');
          console.log(err);
        });
    }
  };

  return (
    <Wrap>
      <Title>
        <TitleBox>
          <PostTitle>{post ? post.title : '제목'}</PostTitle>
          <PostSubTitle>{category ? category.name : '카테고리'}</PostSubTitle>
          <div>
            <PostWriter>{nickname ? nickname : '작성자'}</PostWriter>

            <PostDate>{post ? post.updatedAt : '작성일'}</PostDate>
          </div>
        </TitleBox>
        <PostSettingBox>
          <PostSettingBtn onClick={openSettingHandler} />

          {/* 게시글 수정 or 삭제 */}
          <PostSetting style={{ display: isOpen ? 'block' : 'none' }}>
            <li
              onClick={() => {
                navigate(`/post/update/${category.id}/${post.id}`);
              }}
            >
              게시글 편집
            </li>
            <li onClick={onDeleteHandler}>게시글 삭제</li>
            {/* <li>
              공유하기
              <ShareImg />
            </li> */}
          </PostSetting>
        </PostSettingBox>
      </Title>

      <PostContent>{post ? post.content : '내용'}</PostContent>
    </Wrap>
  );
};

export default PostContainer;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  margin-top: 9.375rem;
`;

const Title = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 0.125rem solid rgb(102, 100, 255);
  box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2);
  position: relative;
`;

const TitleBox = styled.div`
  width: 45rem;
  & > div {
    display: flex;
    /* justify-content: space-between; */
  }
`;

const PostTitle = styled.div`
  font-size: 3rem;
`;

const PostSubTitle = styled.div`
  font-size: 1.5rem;
  padding-block: 1rem;
`;

const PostWriter = styled.div`
  /* width: 45%; */
  margin-right: 2rem;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
`;

const PostDate = styled.div`
  /* width: 50%; */
  position: absolute;
  right: 1.5rem;
  z-index: -1;
  color: #cfcfcf;
  &::before {
    position: absolute;
    content: '';
    width: 0.0625rem;
    height: 0.8125rem;
    border-left: 0.125rem solid #cfcfcf;
    top: 0.15rem;
    margin-left: -0.3125rem;
  }
`;

const PostContent = styled.div`
  height: 50rem;
  padding: 1rem;
  /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
  box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2);
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

const PostSettingBox = styled.div`
  width: 7.8125rem;
  height: auto;
`;

const PostSettingBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url(${dotsImg}) no-repeat center;
  background-size: cover;
  margin-left: 6.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const PostSetting = styled.ul`
  width: 7.25rem;
  border: 0.0625rem solid #000;
  list-style: none;
  padding: 0.625rem;
  line-height: 2rem;
  position: absolute;
  background-color: #fff;
  & > li {
    cursor: pointer;
  }
  & > li:hover {
    opacity: 0.6;
  }
  & > li:last-child {
    position: relative;
  }
`;

const ShareImg = styled.i`
  width: 0.9375rem;
  height: 0.9375rem;
  background: url(${ShareIcon}) no-repeat center;
  background-size: contain;
  display: inline-block;
  position: absolute;
    top: 0.40625rem;
    right: 1rem;
}
`;
