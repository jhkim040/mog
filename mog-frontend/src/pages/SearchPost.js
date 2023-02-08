import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import MainContent from '../components/Main_page/MainContent';

const SearchPost = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <MainContent />
        </Content>
      </Container>
    </>
  );
};

export default SearchPost;

const Container = styled.div`
  padding-top: 9.375rem;
`;

const Content = styled.div`
  display: flex;
`;
