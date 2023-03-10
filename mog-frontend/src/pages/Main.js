import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import MainContent from '../components/Main_page/MainContent';

const Main = () => {
  const { keyword } = useParams();
  return (
    <>
      <Header />
      <Container>
        <Content>
          <MainContent keyword={keyword} />
        </Content>
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  padding-top: 9.375rem;
`;

const Content = styled.div`
  display: flex;
`;
