import React from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';

const PostContent = () => {
  return (
    <Wrap>
      <PostContainer />
    </Wrap>
  );
};

export default PostContent;

const Wrap = styled.div`
  width: 49rem;
  margin-inline: auto;
`;
