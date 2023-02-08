import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import PostContainer from '../components/ViewPost_page/PostContainer';

const ViewPost = () => {
  // 카테고리 PK, 게시글 PK
  let { categoryId, postId } = useParams();
  categoryId = parseInt(categoryId);
  postId = parseInt(postId);

  const memberId = useSelector((state) => state.member.id);
  const [category, setCategory] = useState({
    id: categoryId,
    name: '',
    memberId: memberId,
  });

  const [post, setPost] = useState({
    id: postId,
    title: '',
    content: '',
    memberId: memberId,
    categoryId: category,
  });
  useEffect(() => {
    const getCategoryAndPost = async () => {
      if (categoryId && postId) {
        await axios
          .get(`/post/${postId}`)
          .then((res) => res.data)
          .then((res) => {
            console.log(res);
            setPost(res);
          })
          .catch((err) => {
            alert('죄송합니다. 잠시 후 다시 이용바랍니다');
            console.log(err);
          });
        await axios
          .get(`/category/${categoryId}`)
          .then((res) => res.data)
          .then((res) => {
            console.log(res);
            setCategory(res);
          })
          .catch((err) => {
            alert('죄송합니다. 잠시 후 다시 이용바랍니다');
            console.log(err);
          });
      }
    };
    getCategoryAndPost();
  }, [postId, categoryId]);
  return (
    <>
      <Header />
      <Wrap>
        <PostContainer category={category} post={post} />
      </Wrap>
    </>
  );
};

export default ViewPost;

const Wrap = styled.div`
  width: 49rem;
  margin-inline: auto;
`;
