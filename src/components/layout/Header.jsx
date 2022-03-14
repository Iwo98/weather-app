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

function Header() {
  return (
    <Wrapper>
      <StyledLink to='/'>Home</StyledLink>
    </Wrapper>
  );
}

export default Header;