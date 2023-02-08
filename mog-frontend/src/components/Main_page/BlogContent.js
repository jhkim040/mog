import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContent = () => {
  const postList = useSelector((state) => state.post.postList);
  const categoryList = useSelector((state) => state.category.categoryList);

  const categoryOfPost = (categoryId) => {
    if (!(categoryList && categoryList.length > 0)) {
      return 'no category';
    }
    const index = categoryList.findIndex(
      (category) => category.id === categoryId,
    );
    if (index !== -1) {
      return categoryList[index].name;
    }
    return 'error';
  };

  if (postList && postList.length > 0) {
    return (
      <Wrap>
        {postList.map((post, idx) => (
          <Post key={idx}>
            <Category>
              <Link to={`/post/view/${post.categoryId}/${post.id}`}>
                {categoryOfPost(post.categoryId)}
              </Link>
            </Category>
            <Title>
              <Link to={`/post/view/${post.categoryId}/${post.id}`}>
                {post.title}
              </Link>
            </Title>
          </Post>
        ))}
      </Wrap>
    );
  } else {
    return (
      <>
        <NoPost>
          No Post So Far :(
          <br />
          <br />
          Record Your Today!{' '}
        </NoPost>
      </>
    );
  }
};

export default BlogContent;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 5rem;
  margin-bottom: 5rem; */
  margin-block: 5rem;
  /* margin-left: auto;
  margin-right: auto; */
  margin-inline: auto;
  gap: 3.125rem 1.875rem;
  @media (max-width: 719px) {
    max-width: 29.25rem;
  }
  @media (max-width: 478px) {
    justify-content: center;
  }
`;

const Post = styled.div`
  width: 11.5rem;
  height: 11.5rem;
  border: 0.125rem solid rgb(102, 100, 255);
  border-radius: 0.9375rem;
  text-align: left;
  padding: 1.875rem;
`;

const Category = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > a {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > a {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const NoPost = styled.h2`
  font-size: 2rem;
  padding-block: 5rem;
  text-align: center;
`;
