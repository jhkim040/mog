import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  /* width: 6.25rem; */
  padding: 0.5rem 1rem;
  border-radius: 0.3125rem;
  font-size: 1.6rem;
  font-family: BAUHS93;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  transition: 0.1s;
  cursor: pointer;
  border: 2px solid rgb(102, 100, 255);
  text-align: center;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 1rem;

  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
  }
`;
