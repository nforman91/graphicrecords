import record from './img/record.jpg';
import styled from "styled-components";
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle/> */}
      <StyledTitle>Graphic Records</StyledTitle>
      <img src={record}/>
      {/* <StyledImg src={record}/> */}
    </div>
  );
};

const StyledTitle = styled.h1`
  padding-left: 5rem;
`;

const StyledImg = styled.img`
  height: 10rem;
  width: 10rem;
`;

export default App;
