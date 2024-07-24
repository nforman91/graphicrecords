import logo from './logo.svg';
import './App.css';
import record from './img/record.jpg';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Graphic Records</h1>
      <img src={record}/>
      {/* <StyledImg src={record}/> */}
    </div>
  );
};

const StyledImg = styled.img`
  height: 10rem;
  width: 10rem;
`;

export default App;
