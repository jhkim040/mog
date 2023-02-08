import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PublishContainer from '../components/WritePost_page/PublishContainer';
import PublishHeader from '../components/WritePost_page/PublishHeader';

const WritePost = () => {
  const id = useSelector((state) => state.member.id);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    memberId: id,
    categoryId: 0,
  });
  return (
    <>
      <PublishHeader newPost={newPost} setNewPost={setNewPost} />
      <PublishContainer newPost={newPost} setNewPost={setNewPost} />
    </>
  );
};

export default WritePost;
