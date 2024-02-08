import styled from 'styled-components';

export const UserInfoContainer = styled.section``;

export const UserInfoDiv = styled.div`
  padding: 6rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.8rem;
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.green}
  }

  h3 {
    padding-top: 1.3rem;
    font-size: 1.8rem;
  }
`;

export const ImgPerfil = styled.img`
  width: 20rem;
  border-radius: 50%;
`;

export const AboutMe = styled.div`
  width: 50%;
  padding: 1rem 4rem;

  h3 {
    color: ${(props) => props.theme.green};
    font-size: 1.8rem;
    padding-bottom: 0.4rem;
  }
`;
