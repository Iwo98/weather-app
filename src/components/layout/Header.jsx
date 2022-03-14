import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #32a7ba;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;

const HomeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 30px;
`;

const CurrentLocation = styled.div`
  font-size: 14px;
`;

function Header() {
  return (
    <Wrapper>
      <HomeWrapper>
        <StyledLink to='/'>Home</StyledLink>
        <CurrentLocation>
          Current location: Gdańsk
        </CurrentLocation>
      </HomeWrapper>
      <StyledNav>
        <StyledLink to='/'>Temperature</StyledLink>
        <StyledLink to='/pressure'>Pressure</StyledLink>
      </StyledNav>
    </Wrapper>
  );
}

export default Header;