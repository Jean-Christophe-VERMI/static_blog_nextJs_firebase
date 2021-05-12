// import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';


const Menu = styled.div`
  top: 22px;
  left: 80px;
  z-index: 20;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  align-items: center;
  width: 345px;
  transition: transform 0.3s ease-in-out;

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #2d878f;
    font-size: 22px;
    font-weight: 700;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

  }

  img {
    padding-right: 5px;
    width: 35px;
  }

  @media (max-width: 768px) {
    top: 70px;
    left: 40px;

    .nav {
      justify-content: flex-start;
    }

    a {
      margin-right: 1rem;
    }

  }
  
`;

const LeftNav = ({ open, setOpen }) => {

  return (
    <Menu open={open}>
      <div className="nav">
        <Link onClick={() => setOpen(!open)} href='/'>Accueil</Link>
        <Link onClick={() => setOpen(!open)} href='/blog'>Blog</Link>
        <Link onClick={() => setOpen(!open)} href='/contact'>Contact</Link>
      </div>
    </Menu>
  )
}

export default LeftNav;