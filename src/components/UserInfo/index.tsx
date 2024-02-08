import {
  AboutMe,
  ImgPerfil,
  UserInfoContainer,
  UserInfoDiv,
} from './styles';

import ImgUser from '../../assets/perfil.png';

export function UserInfo() {
  return (
    <>
      <UserInfoContainer>
        <UserInfoDiv>
          <div>
            <p>Olá, eu sou</p>
            <h1>Ezequiel Brilhante</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div>
            <ImgPerfil src={ImgUser} />
          </div>
        </UserInfoDiv>

        <AboutMe>
          <h3>Sobre mim</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer velit turpis, finibus
            eu condimentum ut, posuere at ipsum. Maecenas
            vel consequat mauris. Quisque sodales ipsum
            aliquet aliquam placerat. Proin varius
            condimentum sapien. Mauris quis elit nibh. Morbi
            ut facilisis nisl. Duis et leo ut odio rhoncus
            porta a a dui. Nullam arcu nibh, bibendum in
            enim sed, ullamcorper feugiat nunc.
          </p>
        </AboutMe>
      </UserInfoContainer>
    </>
  );
}
