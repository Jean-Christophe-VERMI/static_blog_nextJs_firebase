import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #2d878f;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media (max-width: 768px) {
    div {
      background-color: #ffffff;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open);
    if(!open) {
      setTimeout(() => {
        setOpen(open);
      }, 10000);
    }
  };
  
  return (
    <>
      <StyledBurger open={open} onClick={() => handleMenu()}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} setOpen={setOpen}/>
    </>
  )
}
export default Burger;