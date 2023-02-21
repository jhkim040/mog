import React from 'react';
import styled from 'styled-components';

const PublishContainer = ({ newPost, setNewPost }) => {
  const onChangeHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Wrap>
      <PublishBox>
        <Title>
          <TitleBox>
            <PublishTitle>
              <PublishTitleInput
                type="text"
                placeholder="제목"
                name="title"
                onChange={onChangeHandler}
                value={newPost.title}
              />
            </PublishTitle>
            {/* <PublishSubTitle>
              <PublishSubTitleInput
                type="text"
                placeholder="카테고리"
                name="category"
              />
            </PublishSubTitle> */}
          </TitleBox>
        </Title>

        <Content>
          <ContentInput
            placeholder="내용을 입력하세요."
            name="content"
            onChange={onChangeHandler}
            value={newPost.content}
          />
        </Content>
      </PublishBox>
    </Wrap>
  );
};

export default PublishContainer;

const Wrap = styled.div`
  width: 49rem;
  /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
  margin-inline: auto;
  padding-block: 9.375rem;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const PublishBox = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 9.375rem; */
  /* border: 1px solid #000; */
`;
const Title = styled.div`
  display: flex;
  padding: 1rem;
  /* border-bottom: 0.125rem solid rgb(102, 100, 255); */
  /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
  /* box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2); */
  /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
  border-bottom: 1px solid rgb(0 0 0 / 8%);
`;
const TitleBox = styled.div`
  & > div {
    display: flex;
  }
  width: 45rem;
`;
const PublishTitle = styled.div`
  font-size: 3rem;
`;
const PublishTitleInput = styled.input`
  width: 100%;
  padding: 1.875rem 0;
  border: none;
  font-size: 3rem;
  font-family: Cafe24Ssurround;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;
const PublishSubTitle = styled.div`
  font-size: 1.5rem;
  padding-block: 1rem;
`;
const PublishSubTitleInput = styled.input`
  width: 100%;
  padding: 0.875rem 0;
  border: none;
  font-size: 1.5rem;
  font-family: Cafe24Ssurround;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  height: 100%;
  padding: 1rem;
  /* border-bottom: 0.125rem solid rgb(102, 100, 255); */
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  /* box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2); */
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 50rem;
  resize: none;
  border: none;
  font-size: 1rem;
  height: calc(100vh-82px);
  font-family: Cafe24Ssurround;
  &:focus {
    outline: none;
  }
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
