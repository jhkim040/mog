import React from 'react';
import { FlexBox } from './FlexBox';
import styled from 'styled-components';

const ThemeMsg = () => {
  return (
    <div style={FlexBox}>
      <Msg>Record Your Today!</Msg>
    </div>
  );
};

export default ThemeMsg;

const Msg = styled.h2`
  width: 25rem;
  text-align: center;
  font-family: 'Hurricane-Regular';
  font-size: 4rem;

  margin-top: 2rem;
  margin-bottom: 5rem;
`;
