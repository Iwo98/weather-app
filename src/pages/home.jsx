import styled from 'styled-components';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    background-color: red;
    color: black;
`;

function Home() {
    return (
      <Wrapper>
          <Link to='/'>Home</Link>
          <Link to='another'>Another</Link>
      </Wrapper>
    );
  }
  
  export default Home;
  