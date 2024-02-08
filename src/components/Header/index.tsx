import {
  HeaderContainer,
  NavContainer,
  NavItems,
} from './style';

import GitHubIcon from '../../assets/githubIcon.svg';
import LinkedInIcon from '../../assets/linkedInIcon.svg';

export function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <NavItems>
            <span>
              <img src={LinkedInIcon} alt="" />
              <a href="#">LinkedIn</a>
            </span>
            <span>
              <img src={GitHubIcon} alt="" />
              <a href="#">GitHub</a>
            </span>
          </NavItems>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
