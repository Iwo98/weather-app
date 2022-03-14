import styled from 'styled-components';
import Header from "./Header";


const Wrapper = styled.div`
  height: 100vh;
`;

const Content = styled.main`
  max-width: 800px;
  margin: 100px auto;
`;

function Layout ({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Layout;