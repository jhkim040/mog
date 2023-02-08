import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PublishContainer from '../components/WritePost_page/PublishContainer';
import PublishHeader from '../components/WritePost_page/PublishHeader';

const UpdatePost = () => {
  const { categoryId, postId } = useParams();
  const memberId = useSelector((state) => state.member.id);
  const [newPost, setNewPost] = useState({
    id: postId,
    title: '',
    content: '',
    memberId: memberId,
    categoryId: categoryId,
  });
  useEffect(() => {
    const getCategoryAndPost = async () => {
      if (categoryId && postId) {
        await axios
          .get(`/post/${postId}`)
          .then((res) => res.data)
          .then((res) => {
            console.log(res);
            setNewPost({ ...newPost, title: res.title, content: res.content });
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
      <PublishHeader newPost={newPost} setNewPost={setNewPost} />
      <PublishContainer newPost={newPost} setNewPost={setNewPost} />
    </>
  );
};

export default UpdatePost;
