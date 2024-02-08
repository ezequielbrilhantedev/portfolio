import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 1.5rem 2rem;

`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItems = styled.nav`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.12rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 1.2rem;
    padding: 0 0 0 0.3rem; 
  }
`;
