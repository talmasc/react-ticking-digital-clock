import React from 'react';
import './App.css';
import styled from 'styled-components';
import Clock from './clock';

function App() {
  return (
    <div className='App'>
      <ClockWrapper>
        <Clock />
      </ClockWrapper>
    </div>
  );
}

export default App;

const ClockWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
