import Link from 'next/link'
import styled from 'styled-components';

const Menu = styled.div`
  top: 22px;
  left: 55px;
  z-index: 20;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  align-items: center;
  width: 345px;
  transition: transform 0.3s ease-in-out;
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #2d878f;
    font-size: 22px;
    font-weight: 700;
    margin-right: 1.5rem;
    
    &:hover {
      cursor: pointer;
      color: #44bac4;
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
        <Link onClick={() => setOpen(!open)} href='/articles'>Articles</Link>
        <Link onClick={() => setOpen(!open)} href='/contact'>Contact</Link>
        <Link onClick={() => setOpen(!open)} href='/connexion'>Connexion</Link>
      </div>
    </Menu>
  )
}

export default LeftNav;