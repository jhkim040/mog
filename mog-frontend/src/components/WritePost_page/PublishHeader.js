import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../images/MogLogo1.png';
import { Button } from './Button';
import PublishMenu from './PublishMenu';

const PublishHeader = ({ newPost, setNewPost }) => {
  // console.log(newPost);
  // console.log(setNewPost);
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = useCallback(() => {
    // console.log(isOpen);
    setIsOpen(!isOpen);
  }, [isOpen]);

  const navigate = useNavigate();

  return (
    <Wrap>
      <TopLeftMenu>
        <Logo
          onClick={() => {
            navigate('/main');
          }}
        />
        <BlogName>
          <Link to={'/main'}>mog</Link>
        </BlogName>
      </TopLeftMenu>
      <TopRightMenu>
        <Button
          onClick={() => {
            navigate('/main');
          }}
        >
          MAIN
        </Button>
        <Button onClick={openMenuHandler}>PUBLISH</Button>
        <div style={{ display: isOpen ? 'block' : 'none' }}>
          <PublishMenu newPost={newPost} setNewPost={setNewPost} />
        </div>
      </TopRightMenu>
    </Wrap>
  );
};

export default PublishHeader;

const Wrap = styled.div`
  width: 100vw;
  height: 5rem;
  padding: 1.25rem 0.7rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  left: 0;
`;
const TopLeftMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 4.7rem;
  height: 100%;
  background: url(${logoImg}) no-repeat center center;
  background-size: cover;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 612px) {
    display: none;
  }
`;

const BlogName = styled.div`
  color: rgb(102, 100, 255);
  font-weight: 600;
  font-size: 1.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: rgb(102, 100, 255);
  }
`;

const TopRightMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
